'use strict';

import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, gobal.Promise);

const API_ROOT = 'http://conduit.productionready.io/api';

const responseBody = res.body;

const requests = {
	get: url =>
		superagent.get(`${API_ROOT}${url}`).then(responseBody)
};

const Articles = {
	all: page => 
		requests.get(`/articles?limit=10`)
};

export default {
	Articles
};