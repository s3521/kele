

const jobname = 'shuqi'
const $ = Env(jobname)


!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

async function all() {
    //nodejs运行
    await dailysign421();
    await $.wait(1000);

    for (let i = 0; i < 10; i++) {
        await vedioreward421();
        await $.wait(1000);
        await vediorewarddraw421();
        await $.wait(1000);
        await drawreward421();
    }
    await $.wait(1000);
    await read();
    await $.wait(1000);
    await share426();
    await $.wait(1000);
    await receive();
    await $.wait(1000);
    await jsdailysign();
    await $.wait(1000);
    //await jsvedioreward20();
    await $.wait(1000);
    await jsvedioreward10();
    await $.wait(1000);
    await jsshucheng();
    await $.wait(1000);
    await jsshare();
    await $.wait(1000);
    await jsread()
    await $.wait(1000);
    for (let i = 0; i < 10; i++) {
        await vedioreward426();
        await $.wait(1000);
    }
    await $.wait(1000);
    await read426();
    await jsread105()
    await $.wait(1000);

}

function vedioreward426() {
    return new Promise((resolve, reject) => {
         const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Host": "api-access.pangolin-sdk-toutiao.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Content-Length": "4648",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "{\"message\":\"2emzU7673msf59DkREVRIxaG4Dyi0VWSwSv3210\\/O+MU4qEUkC9ARCp+rhQCknpwgwkiDTvON61bY2ySdlYicxQkUDmkDDyzhi5LKKjU6K4AjTYo98RaHsfhI7y9tEnpa6abibrPLfB0ZAa32u5AtBurLwbP6vZ\\/nZedNlpCiq2GyNNfghAsAawvabHrJ0QkvbuN\\/KyGy4WyAK6BthLibQhiDWWCyetpwzrJc3fIVkjEzHL3EhTEUN29x5vSEfXV5N5RKtMDrGn0Jbn+TqmzOHkxwGXI4RA6htx+KGFWt\\/uBksfTGCX10Df0EMBymHma3PmLYs5CFbn\\/anPU3A9mWx0DqjolFPKWZOO8Y76IUDsqHOfbqp4h\\/l74HKQMRqB3gqb9bO6X+KB04LBnqMxyso1CInZJcsFUJKwqRrvaAJWXcZt1TtRlu5pDbmbFygG4\\/j7MvT01LXxhGSX9U48TjpbKEWmsWmiv+ZNWYeSV+iuLrxtDEVuNyG2MCW8e\\/aWxpkbtb5qxkww26WL3u02KWAuBMrtteFcURD3V+zNe6toKR8eWYgX2Tu0qmB9Q9hJsXLVt2QXyko5CHbVuiC6diQbW+KWMwsTDhqYNiklJHZcJ7jRBVaE1x6RzpiXp9Mrc\\/0oq9Fz2vD63MZW7A62b0De8XQbacpz\\/CogL8ztGpumiMImKC7snfq6oTfI5x8bIkREjnPqrhLgFYsC1\\/IZR3DK678LzGSi1Y8qRkw9et9r9Wi9UcireJ7F+UsNbxkdIxhHdl7daGet8jSdm3FDSCJIrTLjY9GMdD4YlAnUNPbvo8+6neQA4ypLqOKHDRIEwwXp8GyQxwZk8tPYTp3yChPNVTH5MotXzyA\\/Cm+5ipz74X0jSe3X5KW4C0ekqkBxAU7GBRAU7EA6oBfgWET7xuybC41iVAk5WB9w3M7t2xPzmj1mCEIRgOcSd72BTXFabQI5AVElN5HXd4kXnK3repQfBOVA3Ph4Ant++IXqZjxa7Mp1CeRZQh6coT+veVvK8QhQepkOK3t63xpAaSrhU\\/T2pjbvMfjuVY081dIjwXO8c7VIIy+MTOGOCYte62VOWluV86lKSQMlK7FPpUz9Tr3B6wJF6RFZrna10lEV0kxalDDdwmThNVAH0mC\\/cH3fe17C876XI2VZnktZziSzSmFYYDnOKOA3Ge0xe\\/H394mzEsWjpYbyAcKnLfXeNixHd\\/z2GGPROvQOH3AeBzJHw5Ism6PwdDq7e3VUr0p4oJe8kB7E3Vb8NMujSFfECTTtR7jCQlEBEzPRcqkd4478LfIDJcXn5pR++znE6O3rek1cjN7kgJ2cTBBCpq8mG3VEwhQJhPl28G4ha0FrslfixCLYelyvK2TutVOevmZfYHD8IEb1cP7nw0jPnX7jRM\\/LfFgMQInGbQHBrO\\/OnInNB7bJPOkehDblo5LZSA+HYHbMchPtcVchXF96tpFC9IPpo6ClILHDh6sJXRQb\\/fUsAUHf57ANCN3GphbVfaoorwqOXfhgYtdCzD3AMp2h76MdzQq83tFYcexj\\/R0QEq\\/zb2iZAFQeGNjLVG\\/s\\/uRivqzBiPWVk3NRSGLk9O8niyjJmuoqm3HUDfrbElvzJ7uvNfPk1CX8YOM8L2QbhfTiod3eRc5VVHsstnf48BWNEt45j2xzmG3bDcKqSazTnGg\\/6\\/zG0wj0jaws4uZsqkzzFlmRSVahi0e2rSSDpXCinRJTK\\/4K+HMODn5QPHeAnEMxbvs\\/L9lt+aUszoUVJWjnkLyHZwUmdjGmn9UGFH1JOdUAi8rfvqPtWnG+BdxG5R81maP0Tb4DP7oTYDFLy86QP9NdSYvFPuU4FSKewihMuirmuZ8L+9lAS\\/vqDAGGCh6iq\\/JkU4\\/fPDWfz\\/j1KnnMo2cPsfjSuDxLXCefcTfLytJ34iYnafp8lma28HvpOo4I5RWLhFRSZOlrxQLIakf\\/F4mESndA3gGJBCRQTT2J4CuLNvq5Uaq+4+mc+FPkmWpAIDpJz4apvBUV4Xo0pBbL5VmMAV\\/rxaiujlcyc7s3K9DetXsrKPtceRQ9bls0Kr69Q\\/1eEC+1kiMgJUNxcXraO+ahjInAyp+G7q1DBMwmhHup5gw5uBB3ZSz25FCPJL\\/VhgcDepPNVkj9LLAkp1Gz3Tig+6hE5dAEDZMf3XhMK4Uvu5HjUusFAeGGIu+DNr0vjGYT4BH0kds9QaVr8o82xDFZcFNktYto2T5GcbZ2pRsQ8lHVoSm1p6feZImnkvImn4oJ3onadcB+V2mz4S0z9P\\/B9RFPuFtw02xw44JmzXSfGKyno0xkANtMlrHfLYaI8t4ur4DDQaS7ncZ5Do7xQoT+5zFwqFk\\/Ra\\/4YtwHZDSZ2bicZc9LmwGxKLqPK1O+Y1GSOeqJUZ9\\/2rLVwtX4fzqhH7J6iCXjNsx75UecQPMChcn\\/cnQJ9TiovTLV3DkgyGL3JCrqujc1U3L7OZqp5bNrc0HLI4qieb1ZcjzFcPMN73B5az88tqGx\\/MNn10r6nM5K0t5yek4iw1sEBLuVPgGKhaFPNyiKg9VC9ZAG4\\/QsfHQhwOQKJ\\/CRIfFQnFl7Wf7eOWST2YPufGbn7H\\/vU3\\/S93\\/ifc6hOFQYP0EpWmM3Dwao2Kvo6vYR2yhoHpq3Drv4jGwL5Ozhpafi219lSXTB+k2Ly+yw3ys+asuclGVF\\/+9pAbZRrYgxroXensZvEz3EYdKHJtj\\/h85nTrb1zFWxA+GFITGYB+fzyb88cbrdo8Mw54xWM2KvNmd1tLFAbt6Rrourl3QPt12pY60zT3kRGImKqi2sYdfspRGDKwP\\/+ItNizBey6bCcL1zO0AJgCw9Dm4peLIofds5nAgo4l4ET11cfREOXgkY\\/D4tScmoOHE\\/Y+4P7V3Z1FcskKOKIjfl8FPUODXwTci4wE72BSFoK0PHaRCjp9l+PwFVgKzZE6NE+jF\\/JfL37YyCwLOtTuRAc86s9+uomVuAh7O1qsUlO00T+1EI94NkDsH1s08RBU0\\/0TmtbZ8c9wHjBbkdTBdCmF5XB6nM0XeOtdfNY7dpgl9ngt3dNBZmFt7Kq3Lp\\/OLxE3T\\/PmLutXx1HATlNZ4jKw1IT2qmwZG3jPyFPAiRD45NCVX\\/0p2IToHf3CrYGpfy\\/XS+B3E2ZfgLPZeRQvFPRv1fda43ULdltHiz2EmxctW3ZBfKSjkIdtW6JK9h2tf1ZgDp1FLjuljU+Ee854HSR6dvudgRvodORnOD6fPkB+eiN\\/5P+WVIKzA0X3Ric0sY0NFqpqsjbUX1A1KGx9Q318XNymxAZ1AN+hnNg29evBNe09PV84b3Yq8B\\/S5gRRa0nJt8uwtNh\\/bxih0FkajVUtpjESZpBUiiBcN3iodElIbUAJtnsZ2i5PNhTAlLEu6efuBfp5zmTgHleK9VQyRXA45zYdNOHqTNnfye3MS9mDl69OC\\/cdCGIM+scA\\/qsSVhFgh5Vf9GkM\\/QXhU3RE\\/f1497587OTRzJQ0LQS1syE8XwH6P5TItZjzBXk8TUr6ozXs5Kw0V+V4cYKZBrsEkaLCEMhmaQNTl0bgJ1MzlmQ6bsAbetdBjYjpE\\/stVARS8S4roqU1oaXXdmKFWn0\\/GqMbQDRKZGwz0pHzVgGiMO34mwOyZnH2nweSpRDXZ6xLJ\\/kByaBb1LSyxHgkwfK6qde47mNuJJ0Db82O5\\/5qf\\/1qbKYOQEDsXSQYy4UVkr3C+vh5UwJMCILjeyQNv4Iwvuthax4ORxlsgepJ\\/lwHS1YdAnXAfzqNO6fjXj\\/zQRSoR6HfI4kAMYHfP85eJmADbVQkTr4vzsutA0RBJY4MK+6pNrLSxI5eUoh\\/6DzZFOjMPcSDzjrOxrtDoEgnCLN124HG2UwLUHAGBdaM0VJAgriZP5iSherw+Eqbxam7y54UpmlcS1DzyiSKgTB9eYoFgtv9CzSOgttCzPApkjdVcJJxpp1Zp0f6cByg19MbXG\\/3CB8Uee9LZHLrXQMUjS2cNghN1bRcXj4qvXIC0ikI5WgCdVBFNts0My0KUizCySobLn2i3ElNB\\/HGwQItFoFrqCH8wleQ2C29HSvgLcoAtTmfwPjoOjD48u2rbBp5wB2cBoBxkVni7ykHcmDZcCAzXaMRc\\/P8L4Vl1ik9fUcmabATkE9xm71kSD7fvlV5FFlOwcnfGFrqnGAlP9MzcfoObx279ow39hFCOyyD\\/3Abz5paNceK2p7q\\/QWY3VQkspxhDNKAum9WZ15Ryj3c7P\\/GXfxCBkKErZlkSyLZy0T8py7vekZ4WhFjR1ugh9me4qG+JBV1wP2QNqu+qZ1vGWfiORUOcT96zwVncvh+Lhb7Fz+R9u1hVeHtP+7hrmLOa7Qm7S+egG7oYv0gkWpmcYfGDoCjjPvTNzdbDgMQsQIiwQt2s\\/GRzQDk\\/+qxCtMNPo5k1WMDwdIvsNhmV6qqj3VYfYEwwUt1G4AUL2f1jXUKMrbf8aixTU7Qh\\/WktGsdzAe8RagWriAnY7r9OjYWhW1cvU\\/zsMZ2uw+wQSbUtbEa3wqs31QhiuQqahpFTWg=\",\"cypher\":2}";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

  





function read426() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BJWVwCP9WMjvbHw07CngquuyrpVPkkmkfsWvxRc6UIxbbrdg3-LsdoA8PvRY9WFc; cna=wVmjGXEJsiUCAXAfvZEK/5zJ",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqireader/4.2.6 (iPad; iOS 13.2.2; Scale/2.00)",
            "Accept-Language": "zh-Hans-CN;q=1"
        };
        const body = "_public=skinId%3D999%26idfa%3D021BC905-6AFA-424D-8B50-99F11074780F%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwwan%26umidtoken%3DYRxruFbmacIDADjqvrFJgz0i%26user_id%3D2916901745%26sn%3D2C6C8B4E89B5253B7A6EFE559CF0C08C1229D01C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DBA06F6AB9661003A1DA723B28A1AF20643BB3296%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiQkEwNkY2QUI5NjYxMDAzQTFEQTcyM0IyOEExQUYyMDY0M0JCMzI5NiIsInNuIjoiMkM2QzhCNEU4OUI1MjUzQjdBNkVGRTU1OUNGMEMwOEMxMjI5RDAxQyIsImV4cCI6MTYyOTc3MTE1NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTI1Mjc1Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.PPT_1Wimc2dL141NpVNCweAfe-uJOvy18_UxEwg7VAF-amgti--izqVsPN0QJFuvT5YCojiB8Pn8lvupwboHSQ%26skinColor%3D23B383%26platform%3DiOS%26ver%3D201102%26mod%3DiPad4G%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utdid%3DYRxruFbmacIDADjqvrFJgz0i%26utype%3Dvip%26sdk%3D13.2.2&deliveryId=531&key=sq_app_ad&miniWua=HHnB_xPXK19arARvcrQepQw5tGVMuA1Q9DUHiWCJm9nGcwpspzMwcskQhXo2LQ7esM7LHlgp9UFCSNJIaB/azua2UywuDTc9nzfZGax3GHldNa//kamdwqXBX0bf4bK4u6k6c&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=0FA00ADC614941171F259622F0234BDB&timestamp=1629252811&userId=2916901745&wua=HIVW_gka845tP4apVJpT8T3jvuTCLAlAdR6ZSX2hU/OKCP9NKuytiA6UpqB/DtGEhj5QuiADEypSd4LPac8cp8V7G/F%2BJsiO3yWaNRrkVDywhs1E3oEwWwzwBhdem93cpQj4Tzeh4lDq75qyHoVNw7dKHnAWzRKIjnCAs30ojR0TgFdm89VgM0xjNtFHvdF5yqcEwJkhnYi7D3xNjL5kJ/mF4I8SBoiTEhb0hYK1lh56K1D7b1N0sEXOkozMvbfVfo9X3oRIPhcPo3DKKHsSmNr4iPsk9y4zVLa2yFoswD4Re9t%2Bneo77L%2BBW%2Bxaw1tnmLzm3jec4z%2BIlNrXyAFg0Bh1wuA7xHu0AbTVnrut88Zb28gO2puegDsurUx4y4KlYIcxw";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
                        await read426();
                        await $.wait(500);
                    }
                }


            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function receive() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.0.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.3.0.0) 1125x2436 Winding(WV_6) WK",
            "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&sdk=14.6&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2916901745&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=bCxLedRLOls1JDV7SC1arg%2BRtgLyo21t&msv=8.0.0&brand=Apple&imei=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTU4Njk4NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTA2ODU4Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AcBAYU38rshb57uGyd6FwFvoZccUs8ysDHDMsUrZij4xtnf8cU54vggPnbsvGVFA5btM4aB3h2mPkaTaJHpBVw&skinColor=23B383&platform=iOS&ver=210107&mod=iPhoneXS&statusBarHeight=44.000000&skinVersion=1&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
            "Content-Length": "1229",
            "Accept-Language": "zh-cn"
        };
        const body = "src=204&userId=2916901745&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1629068787&sqSv=1.0&sign=2c2acb044b04498358f5e430d7289311&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D14.6%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DbCxLedRLOls1JDV7SC1arg%252BRtgLyo21t%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTU4Njk4NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTA2ODU4Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AcBAYU38rshb57uGyd6FwFvoZccUs8ysDHDMsUrZij4xtnf8cU54vggPnbsvGVFA5btM4aB3h2mPkaTaJHpBVw%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}




function share426() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
         const headers = {
    "Host": "ocean.shuqireader.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Accept": "application/json, text/plain, */*",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.2.10.0) WindVane/8.6.1 Shuqi (iPhone8,2__shuqi__v4.2.10.0) 1242x2208 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&sdk=14.3&utdid=YRPHOvDewScDALPRGBH3kbX0&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2082127980&sn=08F7FE3B83E32D8F65DCECCBE4629C63178A61CF&umidtoken=7aVLWehLOiVYYDV77H3sI5UY9kx1cFnt&msv=8.0.0&brand=Apple&imei=59AF196F729EC9BBEE11F988A182A7CE8CB76B9E&skinVersionPrefix=1&appVer=4.2.10.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzMjMyMjkyOCwidXNlcklkIjoiMjA4MjEyNzk4MCIsImlhdCI6MTYzMTgwNDUyOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.V0vs1cjUaIYpquFJ_ogFRevqS9sZ62dCFWvcU4rBHU2ivWN8TgnedJsKoER_5Q0UGZOEmFKSCo3u9GFGJg8csQ&skinColor=23B383&platform=iOS&ver=201218&mod=iPhone6splus&statusBarHeight=20.000000&skinVersion=1&wh=1242x2208&soft_id=21&utype=vip&skinId=999&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1",
    "Content-Length": "1963",
    "Accept-Language": "zh-cn"
};
         const body = "actTaskId=304&wua=HIVW_e%2Bg4XdrEgEBghlT8sDEgMBBzfjIX4Em2I2Cpi%2FZ4s1h7%2FyVQ9G28%2F%2BTmO8vxWXBdc4KqU6pxKd6YNQDsrh7OpXeGZHI0NqNRGKMZYLJq7agj5fw5OkwKpe065tOnlRzYK9fnREWLAavCxfsgQMO6VFrvFNTHmzFcGnMj0FnSkBgHak7O%2BAw54BuDUt0g9%2Fr8g%2B3H%2FF1Hj9DlN7hD7hpPugGIjP7TSjrC5ft2MwisaAtDpABAzUuZGg9nELsLHmh9WXzaMBd3LPjlwaPlChNZmjMBe4LEbDWnswkuOF0b1id207k0wHRT6mUX%2FeKSy0gw3HSkw%2BfrLeniL0nJo4JKJ3%2FozdIk7%2F1p4UfoYI9yRnZJKWP76wHbrnEEhPXRNayX&ua=&miniWua=HHnB_6LQHw%2Fj94q70IFeXzRHTUSkJZ4YM8kgedFSZyqqjzvjyLVEmVH8dpRQplX8HrrTfwKLKVrMtDYhBgKOwIummgNQ%2F3OizjD6nuy%2BX%2BekSCtlYCVWON0QUqyfNvMBx692%2B&userId=2082127980&umidtoken=7aVLWehLOiVYYDV77H3sI5UY9kx1cFnt&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.2.10.0&placeId=111111&timestamp=1631840649&sqSv=1.0&sign=16c57ef7b200a371ba5bae51a509c688&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.3%26utdid%3DYRPHOvDewScDALPRGBH3kbX0%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2082127980%26sn%3D08F7FE3B83E32D8F65DCECCBE4629C63178A61CF%26umidtoken%3D7aVLWehLOiVYYDV77H3sI5UY9kx1cFnt%26msv%3D8.0.0%26brand%3DApple%26imei%3D59AF196F729EC9BBEE11F988A182A7CE8CB76B9E%26skinVersionPrefix%3D1%26appVer%3D4.2.10.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzMjMyMjkyOCwidXNlcklkIjoiMjA4MjEyNzk4MCIsImlhdCI6MTYzMTgwNDUyOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.V0vs1cjUaIYpquFJ_ogFRevqS9sZ62dCFWvcU4rBHU2ivWN8TgnedJsKoER_5Q0UGZOEmFKSCo3u9GFGJg8csQ%26skinColor%3D23B383%26platform%3D1%26ver%3D201218%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  


function jsread() {
   
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.3&ustatus=1&umidtoken=HipLZy9LOj7G6DV8St6BPczT53GRCdbm&net_env=wifi&placeid=111111&user_id=2038268844&sn=EB557BF550DDDB0F42451F5641E634E01CDFE75E&msv=10.0.0&brand=Apple&imei=718BABBFD306E93F02574358B53E9AEF98E32121&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM4MjY4ODQ0IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzM5MDc3MjgsInVzZXJJZCI6IjIwMzgyNjg4NDQiLCJpYXQiOjE2MzMzODkzMjgsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.ZRoTEbgp1KBVzfrWiY0mXlPvV_kynpWf0azAmVt7NdIGOOt5SAkAi-D7hgxPTrtjUyK9p2YHVyHqIIDSrSXpxQ&statusBarHeight=20.000000&platform=116&ver=210309&mod=iPhone6splus&wh=1242x2208&utype=vip&utdid=YRjKkqmnuBoDABOa54Af002O&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
         const headers = {
    "Cookie": "isg=BMXFDnxTCB-_6yzazuUjUNdm3gX_gnkUfBAivccqvfw6Xv3Qj9O-5Sp0bASoBZHM; cna=fjPcGXV0LlACAdoaNxHiMLTA",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate, br",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.4 (iPhone; iOS 14.3; Scale/3.00)",
    "Content-Length": "735",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "actId=355&miniWua=HHnB_975MqAHG%2Bz%2B92Cd3c/maZ8L4Or09y15qJFUXUqM5cVtGEi1pXeZCIjv92xeAQ3R3V%2B4ZsYqsHqomnJtagfxgZGZOYg0X8Ct6gm/ewyiKReKQRZy%2BvS9TIjV2iCmHgjwVn%2B%2BcnPWxNV7NidUgWWhvMQ%3D%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1633389615&userId=2038268844&wua=ktgi_fmTqfoOn0uJRRkZtmOHupMkUnDo%2Blxv7ik1OoBzzwpy/Iz3FIKTn5vCLCqmn7dLs1RBz5fh2H6uKMNthFZaLP/RcA%2Bq0DE6odum9eihWl8BLdU2OEJSoJ5xTCL/bAadLjyK%2B1w9RE5t6fn6Z185ski1g1pSd0GmfyjHiTAxs2JratPrbZOn3ADnD10Od/Tma%2BdDBCbtdVT1CZIxvEXo5GhBKVmFcxz/8xwsD6NlZpjoWi/R3hfHCiYGGCLfhETFBX1RCv0yXjT6G6yvPOkayp75c7qy5Cm7/5TBJJdARi5cbl3hN8HQqRVlZqO5RyGFYosCrZILWIRFVubDlmjW/HFA%2BiC9G1cd5aqEZZLQmVwhq8RdcrOZLUxc6xs5GqpzOrSQXx3Y6/bcsy7yeS9mr4g%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

  








function read() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BDIyVn-9h1VRsrtp7nV3yEDjiXwUwzZdhviC__wLa-Xtj_aJ5FO0byale60z5K71; cna=DrCfGa6NT3ACAatTLPVy9s0J",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqireader/4.3.0 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DXblVsgqHUiwDAN7BcQnm2A/p%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUzMDkxMCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMjUxMCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.XflxZv-XcfSRCM8xOPe9cTov51UPtAsEGN8uNnu59Gl-GykDa9PiD6hLSmBft0gUKXmJZ-jUuql5wFtceuB8zw%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210107%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DXblVsgqHUiwDAN7BcQnm2A/p%26utype%3Dvip%26sdk%3D14.6&deliveryId=707&key=sq_app_ad&miniWua=HHnB_U3vcrUclZBGI8xgdUJ8toyc%2Bcu3V7L6584b4LJIqAo9rKD4xOidudtaDEkcZkA34sDtTnXBwQcsP06dfIT%2BwJny1aqZ4O0U9X4YOywUGltpZN1pnlmCAZT/aayksQ%2BsR&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=D68E7080F23E0123C177D2F090C22836&timestamp=1629014445&userId=2916901745&wua=HIVW_5GYaKaLjxLSXInwlxv92LU3UYSySyk5Zb1vIqiSKppZ3k/5ybmHegQJtI6SFnGMca6CRW8KEDuZTBpJG3oWo9wQTHmeBIvTt1/3VesMgxwl/6ump9ia7jvKwqSpZjY7Hq5JON%2Bzk/QhpAfitngKoSxhPKHLDAzpbRZTU06Vs7egZTirraGpMjB9685eeUXqfQt%2BAo%2BaRqFym8u40CdVOPOALEMLGQGGCmQFS9VolpMGFfhS4Iw4vELFzXblrumStKtxJZPnJw7EJ7px/sw9POkjSsxGRc2IEwjcocqaYJ2ueMxvhZzim/Cvk8v2wOFKbIewXvqnvtCG/mnPdf8grdg%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
                        await read();
                        await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function timeupload() {
    return new Promise((resolve, reject) => {
        const url = "https://jcollection.shuqireader.com/collection/iosapi/reading/upload";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BBgYkueLzeNc6OFnwPftXvbB40KqAXyLn_CVz1IJV9MG7Y7X-hHiGkGHIaNdZjRj; cna=DrCfGa6NT3ACAatTLPVy9s0J",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "jcollection.shuqireader.com",
            "User-Agent": "shuqireader/4.3.0 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%253D999%2526idfa%253D00000000-0000-0000-0000-000000000000%2526ustatus%253D1%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DbCxLedRLOls1JDV7SC1arg%252BRtgLyo21t%2526user_id%253D2916901745%2526sn%253D9FFC2945934B0127160C769D23FE8D9606CB0FAE%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%2526skinVersionPrefix%253D1%2526appVer%253D4.3.0.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUzNDc2MiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxNjM2Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.pQFbLw8WrDYjlNnOeO7kfBHqW7-LZyZjZ-Mwk03SWaYrfQ2QspcF26DKI4wsmDChqyHv3SJ_GxVlhObZu1Yvsw%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210107%2526mod%253DiPhoneXS%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1125x2436%2526soft_id%253D21%2526utdid%253DXblVsgqHUiwDAN7BcQnm2A%252Fp%2526utype%253Dvip%2526sdk%253D14.6&key=and_log&readingList=%5B%7B%22startTime%22%3A1629016791%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227370011%22%2C%22readChapterId%22%3A938736%2C%22readingLen%22%3A6%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=67E3DB2C6F946BEF9D018989F4B3AEFC&timestamp=1629016797&user_id=2916901745";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function jsshare() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone11,2__shuqi__v1.0.5.0) 1125x2436 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.6&ustatus=1&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000",
            "Content-Length": "1802",
            "Accept-Language": "zh-cn"
        };
        const body = "actTaskId=327&wua=ktgi_3Tz5Q%2FQuk9FImWbBSzUm%2FN%2Bk4wjoUc%2B%2Bg1Aj6lUFVL4lg3uSd%2FFuCjVsuYudoADGIvP9utkK8wQV%2BSY%2FQypkIEXr8KOinM0h8%2BeI2NF8dXcFW0t5WNRr1YiNpqryTfNciZIeB4IJ3KjlIMxZo7eKxxIbJcAkJ3k6bIiLp0cknSAZrNfPzAOkdHsAojTkuy2LdZKlH2A%2FDactl2%2FpOAJ%2BGNKuJ9rpztz9vudqBp%2FRntPQGQtY3D8iXwr8hf2wAQLUPDq6JiL61j1hOpkWTNlVMnxPvdUN%2Fe342gejaSHVv5zf8cb9Nwn5kyeWB24%2FCSL1b%2Bc8sX%2FUJMphr1cVo%2BQkqA%3D%3D&ua=&miniWua=HHnB_7DYrUuJn7%2BnkozmoMtJTDJ9slmM%2BjM1PYHVyaLHA7ICaKM0PxVvZBwHm7AMjlluCye8qqlxYykLPLjpzWyFR3%2BvBeJc3%2BcAY%2BMqUnpglCzESxBZZ0QEXM0ikiHUP3cuv&userId=2916901745&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629016036&sqSv=1.0&sign=5c6651e003dcf4d7104c01a870581bce&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.6%26ustatus%3D1%26umidtoken%3DCJFLLxhLOp%252Bu3zV7QyKs806Y%252BvW9YrOA%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function jsshucheng() {
    return new Promise((resolve, reject) => {
         const url = "http://activity-center-web.shuqireader.com/v1/task/reward?sdk=14.3&ustatus=1&umidtoken=xqxLWbJLOhVQ1zV8b2nD9uHcXrAs5NFN&net_env=wifi&placeid=111111&user_id=2063328969&sn=EB557BF550DDDB0F42451F5641E634E01CDFE75E&msv=10.0.0&brand=Apple&imei=718BABBFD306E93F02574358B53E9AEF98E32121&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYzMzI4OTY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzQ0NzQ1MTIsInVzZXJJZCI6IjIwNjMzMjg5NjkiLCJpYXQiOjE2MzM5NTYxMTIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.0ikOh3_OWeus-vdKB2Fwtj8wwCNQa87dDl3_AxtgSG_Gj2PCUAbIbAmGqEYteuGtVGcy895E2vdGhVDWcMZkSQ&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone6splus&wh=1242x2208&utype=vip&utdid=YRjKkqmnuBoDABOa54Af002O&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
         const headers = {
    "Cookie": "cna=Om3oGSPWbiECAXjQsjNsJY+G",
    "Accept": "*/*",
    "Connection": "close",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate",
    "Host": "activity-center-web.shuqireader.com",
    "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.3; Scale/3.00)",
    "Content-Length": "100",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=2063328969";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  




  

function jsread105() {
    return new Promise((resolve, reject) => {
         const url = "http://activity-center-web.shuqireader.com/v1/activity/pendant/lottery?sdk=14.3&ustatus=1&umidtoken=xqxLWbJLOhVQ1zV8b2nD9uHcXrAs5NFN&net_env=wifi&placeid=111111&user_id=2063328969&sn=EB557BF550DDDB0F42451F5641E634E01CDFE75E&msv=10.0.0&brand=Apple&imei=718BABBFD306E93F02574358B53E9AEF98E32121&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYzMzI4OTY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzQ0NzQ1MTIsInVzZXJJZCI6IjIwNjMzMjg5NjkiLCJpYXQiOjE2MzM5NTYxMTIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.0ikOh3_OWeus-vdKB2Fwtj8wwCNQa87dDl3_AxtgSG_Gj2PCUAbIbAmGqEYteuGtVGcy895E2vdGhVDWcMZkSQ&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone6splus&wh=1242x2208&utype=vip&utdid=YRjKkqmnuBoDABOa54Af002O&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
         const headers = {
    "Cookie": "cna=Om3oGSPWbiECAXjQsjNsJY+G",
    "Accept": "*/*",
    "Connection": "close",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate",
    "Host": "activity-center-web.shuqireader.com",
    "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.3; Scale/3.00)",
    "Content-Length": "651",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "actId=355&miniWua=HHnB_tJFiUpqyNwhoHFWhO2u092ztfHLJTuGhwOXnYbYprIxFzBvc22mvG1wF21xhRjtt9DLe5RttJrBypF6jzMezCahlSduginJ6ZQdTiQCE/dJ6jsgL8Pwe6hLMAVPT9InW&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1633991141&userId=2063328969&wua=ktgi_mWfdquURMU2%2BcMjdu2rbFdaSBhYaTpUH03PfRfy1Hh62QCjwyNCW6sZL5AqMCsKT9IToXNIU4DPSUWVvOJJ8cXc1r6OnNWC8XtagbrWLGnbHnHdfLs7LfmfViMjYFDFbyNGZFJ2LbrP24emuzCDuFRl4OOBqp%2BRpQjNZsCHGO7YUlQs2nmAAiSvvAuCxDi03XrbWjwVMZhfV%2B9nT2ILuag/sCBg09iHGIfPo8YSOrpcAyIRn6wS8pfNh1Bbt8XpN%2B/w2MDsAXGf8tJ/4wjBmuXqJPQ5KeFhTjSfuCMeqvUYJ/HScRhO%2BanXWHRNgZVR3cilbt1mF7bTZj019NXBeTZhv%2Bj2ELFln2SanwpFpkhA%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

  





function jsvedioreward10() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BMHBbsFARAgBa6gqAIVl62-Y2gnb7jXga-9oWCMW0EiKCsXcaz76sNhA6PhMGc0Y; cna=BXqeGVTd73sCAatTLPUxYOJB",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3DCJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26sdk%3D14.6&deliveryId=897&key=sq_app_ad&miniWua=HHnB_3SMWpVcrf%2BGigHsqHAbaMwFZjmFYm/nSWDLJ5MCjNLvVFtYMwQJEaFFm5sFGqFQ0hCqOXKk1d1MBbmEzQRNjNAGg/HPQe%2B6SZQCZa%2BgRylsfQ7NHm//jwtWr%2BOe89EbQ&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=719&sign=A1C6AC2353277A8E0CD35370A39ADDC8&timestamp=1629015720&userId=2916901745&user_id=2916901745&wua=ktgi_KWcfFAwrcl4kSYsk%2BqAf/XvZ/3UoOoaWSR4pkDOU%2BdxQ06K5q11k4BjdoLwZrrwIoEXsz66a/JsDq8xM%2Bgr2YNlBWtoiubDDvcF2Y//B0d9uYQ7ATL88qSRS46doPR8iY7rBdy6084VMi5wrcgNAocBn%2BAJCaKjZASokU4TZf5WgBWpdN/0ln4keyqPUnrOPOUDPWqxXO2lBuVr0BkGEBrGhBBWDrFw945P93o62quEBP/nvJLLX8/6g9kQHOIQLh1FWqxgUGfXYgQrQ/3en%2B9mDDgySVVXu48iTcTAg93zZ03Nz3/KdAP1/nUcR6b4O";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
                        await jsvedioreward10();
                        await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function jsvedioreward20() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BGVlQ4WMaHwfsIy2RLnZ3-MMfiWfohk0V9tMJGdKLxyNfojwL_LUBu9cDGQI5THs; cna=BXqeGVTd73sCAatTLPUxYOJB",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3DCJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26sdk%3D14.6&deliveryId=980&key=sq_app_ad&miniWua=HHnB_%2BNXh03V1/aLva2aESnRsb3Vid9f3uBac5KaDmUx%2BeF4aO8r%2BPK%2BdtIDQRNlAiX9%2BBzgBl4kySlkbugT19uUSqowDQD76xTiKbyQKaO4obKaLgr18733BJewaxPOMO905&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=CE4FF05F51CF37FE111372001FDFCA39&timestamp=1629015259&userId=2916901745&user_id=2916901745&wua=ktgi_T5TSslcG8S40FfQ7ghBeeMC00V1KvqIp3gVIa4J/GYX9idgk6SrlViY7Odxg/clKzJwVYES6U77CB3B1Ml5OX%2Bei%2Bd0Af1k4zhg64iDJt5Jt0j8pCFz3AY94ki%2B%2BHnmSyR4a2Kd/RfCQXKhf7FSmTiB5vAHhPrb3aSL7vRoiX3EpPgU96iMXDIx0V9NW1PtH0YPwoRFOiYR4BQPEBq6qsOFbJ7TRkFti4RCqJs9uQr4y8MRtC%2BG85cCrnouExTP6mcVVftnplrkTTJYQwIS5CnV4uZilnd949q8be2eXJ1MzsyYBCpKbb7PW3il1df6j";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
                        await jsvedioreward20();
                        await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}






function jsdailysign() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone8,2__shuqi__v1.0.5.0) 1242x2208 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.3&ustatus=1&umidtoken=xqxLWbJLOhVQ1zV8b2nD9uHcXrAs5NFN&net_env=wifi&placeid=111111&user_id=2063328969&sn=EB557BF550DDDB0F42451F5641E634E01CDFE75E&msv=10.0.0&brand=Apple&imei=718BABBFD306E93F02574358B53E9AEF98E32121&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYzMzI4OTY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzQ0NzQ1MTIsInVzZXJJZCI6IjIwNjMzMjg5NjkiLCJpYXQiOjE2MzM5NTYxMTIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.0ikOh3_OWeus-vdKB2Fwtj8wwCNQa87dDl3_AxtgSG_Gj2PCUAbIbAmGqEYteuGtVGcy895E2vdGhVDWcMZkSQ&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone6splus&wh=1242x2208&utype=vip&utdid=YRjKkqmnuBoDABOa54Af002O&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1",
    "Content-Length": "1825",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1633991500&position=601&signInType=1&wua=ktgi_WlAyIrAQjnUPOhPDDvXAcx43zlks42vNguY5cYlW6MgFiTYQi7Cl8ZFeleltyqAPQaFjx5Hx%2BHaNNls2BmuYzuAjJOhriPwqg7HD7eirmls1R7aPfcmGm3u9s%2BZXjKIXaIo0dYetWF9%2Fdus%2BNBepfvToTxPsZ1lZ8pViU4jABlUjkq7%2BTsfkLEtFdnpp0W%2FUG4du9AT7P%2BLcV1R7L4%2FIUcyGxK2DZryR28TRWiS3yw2%2BFPGIsjpwsZczX3E3SLpEiHORsuUiwAdry%2F8x2byy7j5bbQff8VvmoPeIDN7R1Q%2FpCEloxeIdhaxvUOcOhVbLdGlkGsYRS3EtaoPojwDeaVIt0zyQhgmceQuXeJ5B96s%3D&miniWua=HHnB_aUHmfhbTVcfBZ0eF5XLSjNFGSL4HheBIEjKc2GpjaTqseK1JO668aUHbKu5DM6vtGxq9BFgnj9kdaskGqRr66dccDFsHEBATs9kcw0at0bNR50tmDOYeJGoPAHiK%2Fzai&userId=2063328969&umidtoken=xqxLWbJLOhVQ1zV8b2nD9uHcXrAs5NFN&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1633991500&sqSv=1.0&sign=4e4b2b4fc0626b9b7e34abcebbde6426&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.3%26ustatus%3D1%26umidtoken%3DxqxLWbJLOhVQ1zV8b2nD9uHcXrAs5NFN%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2063328969%26sn%3DEB557BF550DDDB0F42451F5641E634E01CDFE75E%26msv%3D10.0.0%26brand%3DApple%26imei%3D718BABBFD306E93F02574358B53E9AEF98E32121%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYzMzI4OTY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzQ0NzQ1MTIsInVzZXJJZCI6IjIwNjMzMjg5NjkiLCJpYXQiOjE2MzM5NTYxMTIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.0ikOh3_OWeus-vdKB2Fwtj8wwCNQa87dDl3_AxtgSG_Gj2PCUAbIbAmGqEYteuGtVGcy895E2vdGhVDWcMZkSQ%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone6splus%26wh%3D1242x2208%26utype%3Dvip%26utdid%3DYRjKkqmnuBoDABOa54Af002O%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  






function dailysign421() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/info";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.2.10.0) WindVane/8.6.1 Shuqi (iPhone8,2__shuqi__v4.2.10.0) 1242x2208 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&sdk=14.3&utdid=YRPHOvDewScDALPRGBH3kbX0&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2063328969&sn=08F7FE3B83E32D8F65DCECCBE4629C63178A61CF&umidtoken=0pFLv0pLOu%2B%2BQTV8brseBSwOB7q%2FpWTT&msv=8.0.0&brand=Apple&imei=59AF196F729EC9BBEE11F988A182A7CE8CB76B9E&skinVersionPrefix=1&appVer=4.2.10.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYzMzI4OTY5IiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzNDQ1MjQ5NiwidXNlcklkIjoiMjA2MzMyODk2OSIsImlhdCI6MTYzMzkzNDA5Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0._Ra3BgFvI3zwGd6GLvKEYKXfpFTRV_Jh100FWmiLKu_rUYx3bjR-25DuDAaNon1sdhm13RCjNYyFF-Hr-iqL1Q&skinColor=23B383&platform=iOS&ver=201218&mod=iPhone6splus&statusBarHeight=20.000000&skinVersion=1&wh=1242x2208&soft_id=21&utype=vip&skinId=999&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1",
    "Content-Length": "1325",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1633934174&position=501&userId=2063328969&platform=1&appVer=4.2.10.0&placeId=111111&timestamp=1633934174&sqSv=1.0&sign=832aa59ecf8c354ab4b896bda8e86027&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.3%26utdid%3DYRPHOvDewScDALPRGBH3kbX0%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2063328969%26sn%3D08F7FE3B83E32D8F65DCECCBE4629C63178A61CF%26umidtoken%3D0pFLv0pLOu%252B%252BQTV8brseBSwOB7q%252FpWTT%26msv%3D8.0.0%26brand%3DApple%26imei%3D59AF196F729EC9BBEE11F988A182A7CE8CB76B9E%26skinVersionPrefix%3D1%26appVer%3D4.2.10.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYzMzI4OTY5IiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzNDQ1MjQ5NiwidXNlcklkIjoiMjA2MzMyODk2OSIsImlhdCI6MTYzMzkzNDA5Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0._Ra3BgFvI3zwGd6GLvKEYKXfpFTRV_Jh100FWmiLKu_rUYx3bjR-25DuDAaNon1sdhm13RCjNYyFF-Hr-iqL1Q%26skinColor%3D23B383%26platform%3D1%26ver%3D201218%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

  

    
  


function vedioreward421() {
    return new Promise((resolve, reject) => {
         const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Host": "api-access.pangolin-sdk-toutiao.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Content-Length": "4644",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "{\"message\":\"2W0ah5czRckZPdhpWORaDQgDLlgXrlLXLWmGFvzj3IeH32mHwndqiFUlQZ5iA+\\/qt1QRL0OKdhr5Z7hsPDSY2tDJg3bBx35z\\/OaGpG4FV+pKoKCxBGiXvgVjUL411k4fIzz\\/jPvqjwGnK15UGguIhRW2xFj\\/5O7+8k1U9uVo\\/VN9ITJiYIsfDWqJplWbS5VWwfXbsLupCoM7iE6mj0P0JwvF9pkb41r19slOJevfKh5wXFCd09vz1f8ch3fuBTKJ+W76+AIuCwjlBkeAhKkBnbhTZp\\/bNVyULNZcZ32JwkiVK7lopAM\\/Y9eiDR0c7ID6lJLwGFwyGpO1DqDud7blRUJmDIaf6OUXb8\\/Piy84ku+9gE\\/rOVYonkZsXDTILY+JU96AMikmkKiXLeFIRwz14UakiGBCNHGNtEWi\\/Fym15kgMrD1VDn87OdrneOUGrhcsTJQ82KAB1ymaz0gDK00egp1b4d2Q59u6travKGWZ0QREibcQHhLr18uDQtmR47xRbQhis72grQ1sk+D0QDn01zDpuf2KAhxG91TpJP7w+3HzSpbUHtBdWG+d+5Psnd1YAWQUqgQp7P586oi+RmL3w1ercwqCPy9iOVxK6HqaMA8UI8oHTjVDjNINIIQr9YrO4Q+K41dkFE47AkK2sf0nN1RfWD9kViueZVmkJBwbg9UZF+Hh9nn2Ijyn953ZWkb3AoX+VGhBkP1lUb1PWEFO8LXGiY320g37GyT4hSRSgUBuqwdnUI4zuDI0McJ\\/DdWdlP9MXu3C9JZSRN\\/JuWH7T0pqpZdvb\\/xkVbvv1Q60nPynJfs5fNapVKACwINifFR4ZAIjIjLEPnacTEdinYL6CHKXjn5xc5jS+OFFAFsPafSbuscljv9ZDs9ZFQ1yvtupLXxjo+2l4DtDRJutev\\/3rXETgp65OVSJ1zcMCTse3ktiPpoFEoXX3JiNRvPwl5yEloz\\/o8V6RsO77QL5OyOy0ZkKhTlQgTqFkqzA5wP6zl58Lcvjqhc+p+1Dn9zYgKT7mfczAybGtvyaxCpqICyPTuYaOQaQRHycvteaODfXBGWHhcpvAivWMbWFpC60buTI0Qa+5YGyidh0r8u5R5CC5St9NFDws3UCO4gqgz23VDiRgrGRhpJtg6clNjVLULZFRogkvU0WZtyu22wDMH6UT6Tagn2Tth1cSzJauMM48OPI57kFsQfzxDFWM5t3uiGc8tvngarqIv98x1B77eu\\/Y3dNfnm6UDVUYLW1X9vztzj2oYJ7W7wDQPSCxQ4yu625TxVyOzLMYriIAq2zp+akPLh0t7IhdnSGTJjw3hCwFNamuxTOluWT1GkiiU69howBLkEqVUF3GYMHRa38A8Rse9a1GvO8FyTiAUJoWIZDsWD6bQyBPe9LxEiwp80dxFpx6+umDMsf6WIjwZoWTASozzlr3RAQ72mZDXesU4aFa\\/dlHfYVRI1ge+uSlVxOq4tkt5HAZ2h2tTUyyAppjSQzfRtEdB3yFwreBaDy4k6X8oTKhDX3wo1+sFVwx2XWlxJtEkPdtJAhQNS5GxPCUue5Iv45CGyxNRvKFG0nXgZBImrSjQFRrO6qB1\\/vbnhejEaOeQcjoIt1NKTlkCYltCat5OFj4J6bx00AF6k4v62VYXVORBtlLu5iIpkXGwdI8c5nZJab1FhbfSSAK8xyKvw5p42tpvpt8TGZU7LbXHAZgA9YZDTWO0G4bXASHi+er0wE4pFaEOCRFSr\\/93X67NDZwzRnAmihakMQIflw7PlEAeUcXRcZI09EswJNeCa0bdnJ4nq3R1\\/PzEjw\\/JdNcd5w8fHdmHlcaeDo3NhF90Lup6pdQ9Fe1mLZ4CHUTNoRVpvOwefI17uswIoguwiV5qv84YHOSw863qcLAkQZN0a\\/cI77XtlKOx0JyIBS7O2oHdi8j32a2ar9w34N7zqIpYZ7JHbMUzBrcyTYClswk6kR++HqD8tLwgxAHS0jFY7YIbNOIO01q92ZN+uBwfYAD7x13b\\/T7\\/ZG76glTO65MI9r\\/CFn557U6pUSwr4Hi22GER\\/UKEufb+ptIjv2yL1KXfzBzDPAwvdKr\\/jARBQvYPB4kOFTB8WWRzb1G00u2+XIsccOVICOHyvKPNF+3mKWx7RI99e4uSFf2IikPJCp9yYPowKramuyLA77Zvx\\/6oVFbGU+LxHgKfme4cpQI7B7XXIl5ifwmUm7fwSF5IT3NZIQA0NOP5nk0ksIq+5ax+eBjTeEqXlhoBfoh+E3qAdcq0ilF12Hai3CbDf5P\\/0MtO3bnm9HBZYIdM\\/OMSHVuiIdU8h3Tcszd7sMr48o9R07IaRQuQnMM1SoTpDMqKKr2vWqfpMK2ZSB7gElRolUf4IP+SiafXgTI0TRnSV6vhFhuRhU8G+rGhr2eIM1F25+66cQhsy31jxhy1kaRg2TUZAsFB3hiipevLA9xIUiGrmBbwKzYF7g+WV2+puqpp29CBYRjkrz3M1B3rYAIM6dWc8QL3kBglLfVgteaAPeJVdxwJbEIhDN1SEtxNgEZot6ggjlEY51i9X0zGFbAjKIU810dgxEVdPTzscl1HQEo7vH7XxChNrWaaQkWKaLS95Ga9HoSfb6nmF+qukg1fo4GKJsZN9U32Y1h5GFN\\/aESrNwy1sr7oGP39AWkNzCjj4C3u7ku0bJyy8VOVjxUElpCnQxhyH2Nwu1hwcRSRHyH5haQWNa8ocIjfw5aF2OTjvQH3x3WarbHWhRnf6yaayCgoZFPmYWjzWuBZVDS2Nbgnj3dAc172WKbYAlz8updNcgUu26RIt82Y+NERIAvKIVVd5sE3kGJ+bLlUH8keYKmF7+MusQXzcpu+i3tioH2aQE6P9S4fINQ9ORWNT1Z6r+jjqqhedvx6gVa7j0FyeaUVIX0ddg6NVx1VnTqnOCS4x41v+\\/2IBXlCFtZKSgKle2jmKPKN\\/ZQrDiqa5jKT0SBp6Dmomn6jGkY5NcYCQJgOm4bzb\\/WOfpXMg3K9\\/lVmY3+gP2hajOBiJiNMDYAH+FMv5gR49pKIF\\/rk3YwyAn684SPDzUn1Y6ZbzXFT9YXRbttcv+S7rrq6LYXfFUJUSEDMf8umWfwL38MAlEdUvQ0tZDS0ksjtfgvH4vL\\/rdLgBgY9pW9wRFSBqcX8tJ64pheWk8gGz7wYk2B+AxDZOCDn\\/NfoJwIk\\/yaaRQiZ5ReHhZY0qMaA90Vn1bLynTbkC4kxWCtfwGtX8HYm5d2y8Zbwzn654goH31JKNHa4oQ8DYM9w1J0Gb\\/I+NoMtVegfNeBQHtFIy000n1OdxqRlAllzxBqNb\\/MDz2tsVYTN1089kWAN84WWCA3EXjLyyJavRnsMlZjkR6BPKBAX9ww\\/7buzNCilmPz+6bzvPly7vFUUrpVcQREefZs9nxCdSJYYfDrJoVUkFopDNHBz8+4Nm1aUXUDerkqWOSxDLOXHpQpNcS\\/fZivTNlHGr\\/FrXjP3jd\\/L92yckhpHfgFkgdlwKRpc6GmxyH2vJIg80fRe2XGeHLmdfiQlObm6gO4txO5W9\\/wACAGrVqneo+VZ3OyciLmY9xx707xLL2FkrgBVdSBcubA9aRaGKQP7\\/eDW6IK1p+d9cDnHJ3xOQ3C7pbrFyt3iAVbQ5Znjf9r254LXTPqGToTktaQ1XHQy6rK4vGqzDoJgvb7mwWK6WYYTNxDUercrOU5kRW5gTYGt06KpmEp8ZPF9qww9vppXT9noGkgzGaxIV8j5m7Qokoi3Scle430GuJYdwX9LvoO25rpWtryWhU62WICU+YrRy4fyuQxOFx+F8l1jDuyxbEc4mXXwTvwRbzhzHo+J516YMfZyRU7Ef6sfc2qLXboyyvxj9+9shLoI23GJK\\/JJnNRG00zaoXGhrxXOIKY2mZLL8A7lD8o\\/KsGfZxxrYijTFLbCwiJoJyWglH5X3\\/SJeGFCEHnuew+3tJCQbli\\/MVDL1d1H+kAbKOWyXWVS9H3ERyUkEc5VtTVHbUDyHKV0MO4MvvieujfB46krw2VH7PNz59hbeVnSLxN2AiuZhNAj91keCfz9E\\/9K2eVhZJXyo73n6+rfY+1ryiC4gI3iDk9XEYyQV8PP80tSaqoEcqtV696vzHLapmGe2nBlc6k2xDkegh5z\\/ovJuJIGVsMVVU8NgGLBgoEUBuq3zlznJaB8RMPrKsQf8p3RIXSkyvBM8gD6JM9A1lDsKhpmVSodO9B7BlTsz2yCKRG5rclrWaAixAN\\/dDyW3ZktcLkkrNfGHnrEbeHzeVB3KBQSc39nuU70NkPDkHBVk9NQeCZHVtjbJJ0UTasOl6lky5EkX21JrzaoIzuULZwtXTz7wzGW44yuSCmhuKS1kyKeFcXoukCEng+3OeuuVHgMdW3hH8dkFlK3lrBjxEeBD0QFGapasQ53bDWwzdqVOfyxS99t\\/72QTwH3VLvGPgOuRwwozusNz\\/xenYr1AwiR2e0SJdUFW6gNT+dVceli4RH6l\\/zTIW7RvBuUiwI\\/o0fwgFcR0s2DAm+3FVTVP6vk+26NMQkIsagTKSkUi1VBvRH1w7F49LgFcTtW9ubJhZ77OP\",\"cypher\":2}";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

  

  

    
  




function vediorewarddraw421() {
    return new Promise((resolve, reject) => {
         const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Host": "api-access.pangolin-sdk-toutiao.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Content-Length": "4644",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "{\"message\":\"2fTFSPirjCV8OtgA9qRcEd+Idz8UZMwc7gSXNLQW7HoffECzou8Ndg+Aj3NT45Xe4eaAMwmCSv7Ldt7Kik4rm5dJ1lT9qyowGYSgk0G7b4v7fRJuHFq2tLn5TXKHj0ZbF6d\\/CtWTO68yiYcIsIVydZQ06Ui\\/RKIGPrBMliTT2cJoPaipsn92G7vvVpEk9zhRKPEj41dhF9Vc0xi\\/xfZNv0zU3UZN95AyedBrwFHkB4wsjjYiwOGu4ilhfz4IfAhPeCkmhDMQWeoLbUIsirLvlXeNjqAonKDqFQudEmGx8+QjI9rdB4YEUjoK4nr7TJp4C2wVUCoksrh3xaalQ7M9peKimXZEy13hMh4QHjchJnheeyDMG9W75uRU2Iys6eVcPFBI2OoBXuMp3bWX4jA\\/qQiQnGY1g10J0FZvmqEo8Z3rbNxfP6mQWwJCVWRNK9eR7+EbKyvdtZ7axudvRJJ+Y29JTjXiJpdCyGw\\/Bci07H+mIAkERt3DCidHDsAWoUm7qqufWMt9WAfTtj8kv7rp+weFZo2GSo57qS61h94WgNwl9sOK2R6rMTIfYmwlVmU0C57y0BcQE9Ja7iJdoKnY4aPOgrv8xGb3A1FdkA6K1\\/U8\\/6nrL7+cxG9r3vXMvWa6RZQBZKEFrEScoqU+UjrVdRCaWgqfzPz0k1kz4ezgEMP8oaYzLyDX5ZJV3ehK+YbvS0usg\\/TU21AlWUz56ROeU9XT0KaNjGFPlHCT49ZOrnNHj3tPnbAEKJAejgl9T2wgl3ZwvOQQMHq1hrjZYXhd7YXUQJOY2OZQUBQm8T66I4VpEQLz7lL1RfT\\/8mzKSkPKR2koccoHlOsKjaqFW9ZnRWxH+bjGerjxjG0c3iYBq3RFQ5NEbIU2MI9rk++ggEDV6pXub9onUOZBFafL1KOCRa6RVjbZ3Gv1Uo4LHiYsBnJ0ZWgJEl7OMv+AWzP18LxYGe64UHUuEOKQv2OG9A71ctYw27zsmsQHJ9zzlJPvkihPHPnyHwAR81uqto7\\/2Q7FNwOHowyJmj9EfK+lFOALa\\/c3egnF2mMD1yp2OY0CV7vpaBYvvdFLRiW2W3WCOdMSzH4IHQBGvGfJt\\/dNQ870PNlGzNF\\/cHPJ4puSVgZWOrYvkE54mcrt5YXGOBGGLh60EmCcBmIWLdZD7otU9LO9WYAE2BCMXR1SJAKFjQradG1hOG1Ku\\/W1VrSgV1fADPaW7RBn1j1OJx7\\/x9VD806YnIKJZ4\\/H6SJr6odECTRtk+ucXCQvw6sTIQhZPeXwaC5atiCHw3\\/PZ8JZ7lhBlbsiunPjEOiTEM3zDl9gbRdQaoYjxqtkzabCrJnbXbeTPvsncgDKKSnBPw7ZBeFY451gaQQnIVBDzTT7PUcMQe8hwOeh6nyJgJzfJzWBPwJAC2kwTmFJj6hfRyKMRKZUjs7yoEwvrtJW2BkabBnKrS8uemGL2ohsaXCktSUhNXWHBrHxWaWuzZ+yAmxyuJaOC09V4SLQktuaId6V+voQkmr6vid26lG6tITXS9dv1quIVg9GmZO8EkM+FEd4ptzL7h2LYecJ0h\\/rrly3Wk4tvzgLZu1flmsrAyvocbNrKxUPjSweMnygcysz\\/VmHmBeDFoUp7k\\/oxunljARbEw18CVIX4BG83VhObr0KnPLWjigz\\/9\\/GxkbPZrs1Sl8G9M4KvDvfzhjzFO9njotGV1\\/idTCu3FhOjCnxh4K1s0Pxigz0HMxHljUs8MX1SLMmr+lNTC6O84Krn7bEPC8dt9qxAl7NVX8uqwTPmLisK8YkNNQLb6zAzcjQtw+KbcG8QnwG2D3I2ueTkTH4e5cd\\/Kw3kuJhuVDggxbSUzg3yizi8Gi\\/Cuq1zgsiEWJM+auf6mqvUJMM3ddMsvvK5QhZYCyH8YUI9MI+fFOF\\/UpCdWIOKPE8oYlB4xVZKYeH7ar5ydzWA2Z2UyWxf7XfsomwUpgbdj+Rbl1dtE7tKkRfp+qFgQp5FIhShUygP7kArP1U3L0DqNwgmvgm2eW+KrEShPUo99r3MwlO6z19aJsKEe5X0NHS\\/reLBHtDwLCEYTEP9dVJ6qX2sLMr8TVyiFAnLqwS3sAy7wDSsnZ5tQeqoJWVor+\\/oTGWmT\\/\\/czAipCO1JaCaYa\\/oRKv7KoQVgbakz4+cJzlTCpWdM+Dyv4QHayEXQwlQxLILHJgm83hrpsYORQhxRs2C2LQCzD5pnnjTAJZFACjq9HOSXMWO9qrV+nHQwg0uHzVo\\/nbUebRKsMuDGKuzR10d86tV10doV6ySzBddFquPD+v\\/O0dt+v4zlDskievwQG667UcT1ia0nJaPsQA3AEsu7g3wIYQ98dzVBSYcHZ0cLeuTXpMnbl6XnRt+m1uEB2VBbl6nEmUrfpqfMeX0fwRWB2k2PM1dMab2I1fJTcxWd9\\/LhjTuyidluJGsvgHQ44PfK7wD2EBMhpMyBsWoRb\\/k41gBYh6aBwrMM7qDIseOUFi\\/b7Gm+ZhOlDBqZHJoM0K0IHlJQFv4CsuWejc38iBwavgO+2d8tieI+KFOGViUD+bNIGedR4R\\/7l1r3gfQxe6TiXeLBpi51KYmyvuRN0jhi4mONWbRCwkUHdDW6mTkVjsy5mxX7edMyBQ+Hz2pYTpXwW1YDvfudiU0HRjbNqEMdUN5jQG1HZnSVR+zi88L2Fisz4Ci96wh8fhl7pXHrIEvrMBcg6Ntay393XELTCmC7Ij88mkZvgnF5QMPTBYjAJ9EGfSUUGl9ZotCOa4\\/waPZqCahE8BIMT4pIJrotXKyE+L+X3M42vltgN5aFUDbEt8s0ACvY8qktvNLWdSuhtAxlnw0696E2tMnssWazpdpqAhHXn04cO2wMZpCeJOzOiSzlBqK7p3jMFoX5Re\\/rnzDdmDrsG19hVExJx9uz4I60VNXYuTK+xtUdcB6MKSir1pyZabA8SHhAnmkyjWGwI2Ml1X9ejZpfNAJ7EF\\/PRY\\/S5zAbvPLPtePBeCyG6lF58BGt7k0C\\/vMKWBydKOVPgwYv785RVqfsH1cvwo8VL5BAwIXU2qJ7BYmXLYXfcHGM7nuv3NmMW9yVvXElpVEySE0XvaYVjJBm5JM4WUW\\/X4GPhDyU7yvEZgZPAro+6\\/1dc11PU5vqtUIidk+hZ2KUx4EQN0PZgemsfuT83nWHK+BzSpj4lDY2Jiy6nyqq2ZrJV+9XOidWdZyfZ0nLpCyyRl5laxAEoNRKpyMD\\/es+c7PHBenYzVZF3aImjqkeGUyrcGM4U9pa2mrWy8MvEZeZHjyjgPdzhAWY+qZMgEsZVMP2g+rswwtrAJvu2K5mmHnNfLdUybXdTetNoHmeqaMJy7D0oV9gWElLSWZCddw4AjxibR8tDbsAch1nHitBZ0KI3nAqG8iIBmB3oxVPoXIyv8VQwf6qTUow5zUPwbpyeU3FY9xqXEiEYka3o48Uyull\\/ESENFZCT4CPJFtLh+szPGNwP5xyyO5N8NOTQ0kyhtPJBKIQgLp+dyYIbKqJ87aktOFkve6mkmmz2OmL11XnCBtd139HmEemrqkCzhDtB43mb35sOGr85slqpW1AcmlCIsP9j5Ww8iHoLv9v5F9EwsWxZ0JYAte7gZucuZ\\/V\\/UB6cTgiJEBxiTfhP9SOeTXGMaruYAcZJHXmjnp+fvltqbV0Esja5a\\/hmqrPHtRoXUVa\\/FrrOARYrLiwPAP85Sc7ajCdkn8VtCVZkyP6X1eGnRzxbaCSY7\\/\\/KzDWshB5tTgTN7c+3oeFgO5HyVdtZ4yqYEMEWR+Q8dyYG\\/03dqscdsPiHq2qBbkm7V\\/8ULLhOM0lwW9I5lfN\\/2M52\\/z+Yn0Kv\\/y4zoS2Rvnwjiu69ZwS2viS\\/3pyWm91qLLuBIeZt\\/trADasKqjB2Z90I6jozCiaSQYUqIfSJ5ybqOdPjU0fVhzRNeyxcQfSdM1UhLIZRyr9j7G19ZPheF0RDp9mIbTAwyO3\\/ypemZOAXh7yQUi3me1a+SlKG3Mqpy7pKLwKkG0jJNJrFK3UAxr3TSk6Vkc4kM7Q\\/AaE\\/\\/xlRacqinNJ1fr7BS\\/sU\\/NZk\\/XSVWYxSusRtZjL0Iq0tmYy0nsUUP1pAw0fHoM8xGa0ZH0kYnCsSD3c\\/P55CT4dTfa3OAU8aWiSQK4lnA0R4+aKrexak6i0c8bbtF3TLvYD8dcK8jDe0OWTxOrcAQaulP4lbDOuMG\\/VH11GFSoUterD\\/WTnXbNlh5Swr6j0Bp1sCddHVf8VFplOkiFFzrVFlG25rhPDBFE\\/OtOXz\\/0KB6qtImA2zerN5CXjEV85nhmmM4fWEkqJ9HmmmaRv7eZgd267bhpXccqzbAmpjl1mwPx2D4D1UKHIF\\/MBKPuTh7ylj4+sRM7rJ\\/nsvlRxHcu\\/GRx86pZNVy0FRcCUBNL1Sn5GcxZ2X+5FaR\\/BwutZOjM4u03ictDeg3r3l3cWfLp91gs3iegR5HGr4NqQxpoCFLS0XVdy\\/EvG4zVg9uDEiLCNNZcYAphNjtWVg3jF0JzEq7DA\\/yo0Bq\\/nS72LOoA0nEhaHdbZCaw4O5ppY+ub8IFsyfIx7QU=\",\"cypher\":2}";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

    
  

  




  

function drawreward421() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.2.10.0) WindVane/8.6.1 Shuqi (iPhone8,2__shuqi__v4.2.10.0) 1242x2208 Winding(WV_86) WK",
    "Referer": "https://render-web.shuqireader.com/render/wx-activity/page/lottery_page_red_package_rain/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.3&utdid=YRPHOvDewScDALPRGBH3kbX0&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=2063328969&sn=08F7FE3B83E32D8F65DCECCBE4629C63178A61CF&umidtoken=39lL8WlLOhrT0DV8bnWiiTceC2QAz4SF&msv=8.0.0&brand=Apple&imei=59AF196F729EC9BBEE11F988A182A7CE8CB76B9E&skinVersionPrefix=1&appVer=4.2.10.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYzMzI4OTY5IiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzNDQ1MjU0MiwidXNlcklkIjoiMjA2MzMyODk2OSIsImlhdCI6MTYzMzkzNDE0Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.mLXRR3DuKJsBEEhwMe2J91yI4_8YSMd429zuGiJ0KO1c6YN0MTrTiu_pp40dHArfp12ZRp8yQn6az1Qysc9SlA&skinColor=23B383&platform=iOS&ver=201218&mod=iPhone6splus&statusBarHeight=20.000000&skinVersion=1&wh=1242x2208&soft_id=21&utype=vip&skinId=999&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1",
    "Content-Length": "2149",
    "Accept-Language": "zh-cn"
};
         const body = "activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&wua=HIVW_4SnMRfgW52fPd0XFNPMBOFqXiawMPUS0zHVAlbhQNHIeNj6tMtqa8aP4%2B%2FMfiyrUE3XJ6g%2FLPloKbaWGG0876Ck6iBLJx%2BDSmRQb1Zsi0gMWMIwyiJn%2BVhuvHhIkF9U302cbGtOj6jYOMT7%2FcpGSjlFPhBNPQ1QAA240HxMY9mlMXtDzxI%2FH0nBo1sgK8xPTDO8u31zMPszlZLAruxTJ4JMrqtnU2S0joEFcZhfjiOC4mUO%2B7Emx7BtkdBXbOKXrlJFZdrN1WjwZlOGjqv%2F4GyfI5pNh2Sw01U1Vg214mYXktl%2FNBeLFNFOrkhYMFE%2BEpXXCpSGfIHgVgbawSmoc3uDidcFpADcDdJQUA%2FX3x3960KmIfQoH20N3ZOobOgyesB4RlqYjRmBV%2B1WT1WCCIA%3D%3D&miniWua=HHnB_aPWDpbJX3ZQMODSAi9va1gu7vlL2iUYB%2FTNYd%2F6fMH81GOnvA1EGQUuzZc5h4aPzqbRFoBngo7ld6pqLl6PI6hI6lt6NYRjEFgKMTrMb6dVDG21gKg3brxoTL%2FvyC2L%2FBST0HLi2ftJ%2ByE74pUvbqQ%3D%3D&userId=2063328969&umidtoken=39lL8WlLOhrT0DV8bnWiiTceC2QAz4SF&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.2.10.0&placeId=111111&timestamp=1633947261&sqSv=1.0&sign=02da70bb62829ca9fe20f58e41d0272d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.3%26utdid%3DYRPHOvDewScDALPRGBH3kbX0%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2063328969%26sn%3D08F7FE3B83E32D8F65DCECCBE4629C63178A61CF%26umidtoken%3D39lL8WlLOhrT0DV8bnWiiTceC2QAz4SF%26msv%3D8.0.0%26brand%3DApple%26imei%3D59AF196F729EC9BBEE11F988A182A7CE8CB76B9E%26skinVersionPrefix%3D1%26appVer%3D4.2.10.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYzMzI4OTY5IiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzNDQ1MjU0MiwidXNlcklkIjoiMjA2MzMyODk2OSIsImlhdCI6MTYzMzkzNDE0Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.mLXRR3DuKJsBEEhwMe2J91yI4_8YSMd429zuGiJ0KO1c6YN0MTrTiu_pp40dHArfp12ZRp8yQn6az1Qysc9SlA%26skinColor%3D23B383%26platform%3D1%26ver%3D201218%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

    

  

  





function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
                : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
                new Promise((e, i) => {
                    s.call(this, t, (t, s, r) => {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
                this.http = new s(this),
                this.data = null,
                this.dataFile = "box.dat",
                this.logs = [],
                this.isMute = !1,
                this.isNeedRewrite = !1,
                this.logSeparator = "\n",
                this.startTime = (new Date).getTime(),
                Object.assign(this, e),
                this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                    r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"),
                    a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
                this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                                e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => { })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n")),
                this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
                console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                this.log(),
                (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
        (t, e)
}
