var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "360000",
        "ok": "360000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "69",
        "ok": "69",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2490",
        "ok": "2490",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "78",
        "ok": "78",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "percentiles1": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "percentiles2": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "percentiles3": {
        "total": "83",
        "ok": "83",
        "ko": "-"
    },
    "percentiles4": {
        "total": "225",
        "ok": "225",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 359751,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 107,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 142,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "199.889",
        "ok": "199.889",
        "ko": "-"
    }
},
contents: {
"req_insertorder-85bd2": {
        type: "REQUEST",
        name: "InsertOrder",
path: "InsertOrder",
pathFormatted: "req_insertorder-85bd2",
stats: {
    "name": "InsertOrder",
    "numberOfRequests": {
        "total": "360000",
        "ok": "360000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "69",
        "ok": "69",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2490",
        "ok": "2490",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "78",
        "ok": "78",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "percentiles1": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "percentiles2": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "percentiles3": {
        "total": "83",
        "ok": "83",
        "ko": "-"
    },
    "percentiles4": {
        "total": "225",
        "ok": "225",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 359751,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 107,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 142,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "199.889",
        "ok": "199.889",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
