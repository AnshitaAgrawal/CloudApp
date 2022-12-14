import axios from 'axios';
import { Component, useContext } from 'react';
import { getLanguageString } from '../../lib/globalFunctions';
import NetworkUtils from './NetworkUtils';
import Config from 'react-native-config';

/* Creating axios instance with Config.BASE_URL_AUTHENTICATION  as base url for axios*/
const axiosInstance = axios.create({
  baseURL: Config.AUTHAXIOS_URL,
  timeout: 5000,
});
/* adding header for api call for authemtiacation token */
axiosInstance.interceptors.request.use(
  async config => {
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      //'user-agent': 'vscode-restclient'
    };
    return config;
  },
  error => {
    Promise.reject(error);
  },
);
// const { handleMaintenanceFlag } = useContext(AppContext)

export default class AuthAxios extends Component {
  /*Method to call api with input params api name,api input params, request type (default get), callback method after api response, */
  static async getResponse(
    apiName = PropTypes.string,
    params = PropTypes.object,
    requestType = 'get',
    completion = PropTypes.func,
  ) {
    let apiAxios = axiosInstance.get; //Setting default axios request method as get
    if (requestType === 'post') {
      //if request type is post
      apiAxios = axiosInstance.post; //Updating  axios request method as post
    } else if (requestType === 'delete') {
      //if request type is delete
      apiAxios = axiosInstance.delete; //Updating  axios request method as delete
    } else if (requestType === 'put') {
      //if request type is put
      apiAxios = axiosInstance.put; //Updating  axios request method as put
    }
    const isConnected = await NetworkUtils.isNetworkAvailable(); //Getting internet connection is there or not
    if (isConnected) {
      //If internet connect is present
      try {
        if (requestType === 'post' || requestType === 'put') {
          /* If api request method is post or put */
          let objValues = [];
          let objKeys = [];
          if (params) {
            //If api input params are present splitting them into keys and values
            objValues = Object.values(params); //Setting api input values into objValues
            objKeys = Object.keys(params); //Setting api input keys into objKeys
          }
          //console.log("upper log");

          if (objValues.length > 0) {
            /* If there are  api input params */
            let formData = [];
            for (let i in objValues) {
              var encodedKey = encodeURIComponent(objKeys[i]);
              var encodedValue = encodeURIComponent(objValues[i]);
              formData.push(encodedKey + '=' + encodedValue);
              //formData.append(objKeys[i], objValues[i]) /* converting as www-form-urlencoded parans*/
            }
            //console.log("formData",  formData.join('&'));

            /* Api call starts */
            const response = await apiAxios(apiName, formData.join('&'));
            /*Calling Callback method after getting response */
            completion(response, null);
          } else {
            /* If there are not api input params */
            /* Api call starts */
            const response = await apiAxios(apiName, {
              params,
            });

            /*Calling Callback method after getting response */
            completion(response, null);
          }
        } else {
          /* Api call starts */
          const response = await apiAxios(apiName, {
            params,
          });
          /*Calling Callback method after getting response */
          completion(response, null);
        }
      } catch (error) {
        //If api fails then showing error as alert by passing the respective error based on error response
        console.log('WSError===>', error.response);
      }
    } else {
      //If internet connect is not there
      if (completion) {
        //calling callback method amd sending response as null and error  with no internet connection
        completion(null, 'network_error_msg');
      }
    }
  }
}