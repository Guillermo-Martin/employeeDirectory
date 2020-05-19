import axios from 'axios';

const BASEURL = 'https://randomuser.me/api/';

export default {
  search: function() {
    return axios.get(BASEURL + '?results=20&nat=us');
  },

  filterFemale: function() {
    return axios.get(BASEURL + '?results=20&nat=us&gender=female');
  },

  filterMale: function() {
    return axios.get(BASEURL + '?results=20&nat=us&gender=male');
  },
}