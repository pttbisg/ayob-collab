"use strict";
const axios = require("axios");

module.exports.crudsListner = async (event) => {
    try {
        const data = JSON.parse(event.body); // get the operations array,

        const appId = process.env.APP_ID;
        const restApiKey = process.env.REST_API_KEY;
        const url = `https://api.backendless.com/${appId}/${restApiKey}/transaction/unit-of-work`;

        const resp = await axios.post(url, data);
        console.log(resp.data);

        return {
            statusCode: 200,
            body: JSON.stringify(resp.data, null, 2),
        };
    } catch (err) {
        // Handle Error Here
        console.error(err);
        return {
            statusCode: 400,
            body: JSON.stringify(err, null, 2),
        };
    }

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

/**
 * @param {*} event expect an object with a where clause string,
 * ex {Where_clause: "Channel LIKE '%Consignment%' OR Channel='ISG'&loadRelations=LINK_User"}
 */
module.exports.search = async (event) => {
    try {
        let data = JSON.parse(event.body);
        let whereClause = data.Where_clause;

        const appId = process.env.APP_ID;
        const restApiKey = process.env.REST_API_KEY;
        let url = `https://api.backendless.com/${appId}/${restApiKey}/data/SKU_itemEntries?where=${whereClause}`;

        let resp = await axios.get(url);

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(resp.data),
        };
    } catch (err) {
        let theError = "Error: " + err;

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(theError),
        };
    }

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

/**
 * Messagebird API
 **/
module.exports.messageBird = async (event) => {
    // THE CODE FOR THE MESSAGE BIRD API WILL BE HERE
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "@TODO make this end point work" }),
    };
    // return { message: 'GG', event };
};

/**
 * xeroAPI
 **/
module.exports.xeroAPI = async (event) => {
    // THE CODE FOR THE MESSAGE BIRD API WILL BE HERE
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "@TODO make xeroAPI end point work" }),
    };
    // return { message: 'GG', event };
};

/**
 * easyShipAPI API
 **/
module.exports.easyShipAPI = async (event) => {
    // THE CODE FOR THE MESSAGE BIRD API WILL BE HERE
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "@TODO make easyShipAPI end point work" }),
    };
    // return { message: 'GG', event };
};

/**
 * shopifyAPI API
 **/
module.exports.shopifyAPI = async (event) => {
    // THE CODE FOR THE MESSAGE BIRD API WILL BE HERE
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "@TODO make shopifyAPI end point work" }),
    };
    // return { message: 'GG', event };
};
