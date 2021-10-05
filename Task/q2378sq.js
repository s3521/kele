

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
    await jsread1()
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
    "Content-Length": "4763",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "{\"message\":\"29Zpk5hSTUQyJMOpdIz0MwndRfpb8VA7PaPKkOkPuBuEjd1rFAceBlzkzNI+5KvhaOtw4MHKrgGverZgbVDBVlJXx\\/x9AF6Z0xtrkJsvcS43FlTITOn8JaAGR86VAfcI1sV+NNXl79cSIVzZnKeCFzrxqqgvRG9pqLD1rtUu998rrytu6HO1g2HVsX2e04k0MgiGyxWoT+hTydzp8BBlrePHnXU\\/J\\/\\/5Z6hfyoc7\\/WSGzfvIEB7XU931IqPCjgXMBpQWM2CvhE7LV3BcIY3d3isytc+R5n5Gx23fIJl8mzVEYGdKOKWeY2U1sA2AUCWCWXSVwPE3yhJINBK7bCJXCd5DphOmpARgcwyWvnIOOHb1i\\/sGC4fZE7s00wfSxbiRqWBY+w8nsy+tv9O4\\/EbSnbH9u+MOi2mSqJY7x2ee4i5FcFNIRA0jYPV1tD1ORNPf8YpThGzNX7tAnWhuq\\/b+E2kRLozM879+WgVXHPwavRfc0RTky9K0fYbiPFQ3Jb1+Hhp9HAzt55J6YnVIQSxOTZ2qzLXP+3YUuSYUUbPau40YJWeUDXlZorb0eNUqkCe6Zf25aMbyYckbrxNSob9KeFN+ljkvdQw1dkg+s2t3WrOGlq2ujICajNJFKTGl9YceT8k6nlEYlrTmBbjLYw0CO1G6fLwvM8ZAHBRdKTwjnrkaVPzcgA19imD3pANZdIcHWQHj7ypJfR3q5NIotzFHr9a1X1N\\/dUGKlhmWP4QOv8\\/gw0gI3rEHTNNgBbK7PapcgC36UdP+bO5s308rjVr7Iv1jObpwinh5zyYMRbyBwCvN8KudKz9JtJ7cRU3cHoosNAlwkPK9lAqLr\\/QdIyPIcS5ahAM\\/IMHu8HkcmLU6MZP6zrBrVEdxMtHplDxtIAKv6Lv1OIRG8XLYriA8fhnZJuUP3BP1\\/RCvHtbmLt8t2ApF9B9lDK3nNsjDMpajQpL3xbgnPDuw46\\/g5Oc0BHnII5ICZJ4HJTBcuZ8D8BwIWzpqeoNrm5H2ZH6J3tNXJ1Q4ZLOLKzuPcHWrmQhN+e2k6TYA+\\/lN6bo3uG5zq9gQdCO1VV2E3fMbt5Cv8Dpno1nFT4jvdxqJtDogwwiefrHPIhy5uVKUIw\\/fTsVKy\\/XW\\/54Ms5wKA\\/59n1jYdsFE7uPaHKIR97oGwIWmM02Tk8TkaNEqeWPFuv\\/00WKqZsxKBk87tafzE3oduBmqOZCAiU25JEixsIoX3m\\/wecS3bKjht0Buhd9\\/n4R1gwKu5zH+6NknEmOhhefZTFl\\/prLGBM3RUNH5SUnFWnM7EckTuVs58L1RYml1h1D868PrlI+2aPAOijA5KZ9xtufAdPW9hphD\\/7PDGqU3+1NYg\\/pFTF5wlKygIrVfuuBVlyeBDpIv05vUeSgUmF\\/f0xsyskBkXuJQ+WJ4pQ4\\/9re2Twqf0BL\\/ku+tamkTxp4dAqPMdz+\\/dgTnt8nhzvrs4YdIHOhDfS8zNAd7avMiOg4H3xU+kxzefk\\/qLKyozSnHrIVAxDKnMn5BpsvIfXDP45qV2n0CkMrjcY0pTxl10BII20UQlZsu1WuZakoqX\\/ILjcRFMeQBuNeecihJvBn+oWxlWWQ+lqAjXtK36x+2\\/mAr5vCYlK8E2Xk8YGFVhkYDaNy1B91EI\\/7BqGzjWGh2MVo\\/QBMa+Xbx6BG4Ng6XOS1xzQR5rVOeCHwfmpPwdEUYjxQL8oO05Wnas+dVXQtDPccfY3TDagFS+UGaBmyOxRdjZ0St7E9EeSI3FNznB4UzL4mp\\/hSfEWf3ghOF6l0wDD+xTsHqK+No0yuDhZnHc+\\/s56nsDzbXS3NpWCYb8EeTcrjzEf9vrgHJIVFxT63M2gx\\/ISnUPd+B8zmqZdRQ8UdJOkppGcax7d1nRpCopV4lAdnnrqIR6gvRaMgUqdycy2elymIKgA0ifCzCTbpzWhZZ4Exl\\/99jdxiqfb9Wauzo+375lcjonM49xM683J\\/Ffkykl\\/27l\\/XX5Glj6HJgPUl3dmgC5ZbAzN7o62mbG40UJYGczH2qa3AuvnXpf7wPCpeUqTYCbn29jJxY965h1NGDviYVPGWOagfY2RD\\/DpW6lVb2MW5q\\/gOOCtxDqP1cEcQFLq+cadLMYxUuSECmvMp8fpEcTkq8p5360tv8UAZrXstRdaj7Nvo9CadHaMIthlbBkqtGlKDRelySdT1eMIgapzNvL5rOkJBgipD9C7QDpIMivcJ8numQEgzPyxW7sLyU882ZnqvJYUqiU2h16+kt3ozqeyqeDx3vZyXkoT7gEJd2iuBx+CfiB+t6HELTg+wLqYgwrCxGkARplFNiDwM\\/SZmkt+wpmz2DoY\\/YeIxc9FoOEec+I3SCJbXf0HQTu8cR35Sj4Kk6uWW2fULI8zAE0qRgeGaeyyjsH6dSl4E8jzjX\\/+cONc7b1zfpB5dzlhPmomco\\/jSoIdEdb5Ncsjs0lD3Stpd6QxnDZw1c600655Kkj75lNVVVQCz13EZZ5Lcl\\/u8JUarDoO5b59x7k1SlOwY6ETYiuF0O93Yuk7uALzT9fRg9f+H0SsoLDwccXJkDfsaJDEpaFxnHbFUv0Ti1p+MEjpCyGxNlI\\/lWY6MXgxGLG\\/WU4jC4CK05PggfXkZV6fUCjVzG\\/MFO1NE8335ZfhohvCZFK8abDyhg7nRAeRTBD8tKe+sybfhGwU5Us0A0QFHPOoZjiXNbJObq2\\/FAPJv0Ove+7YBfIkK6RoVbxtiho3vp4wiHlcG4KicLfXU8lJU07gxrAbpXCg0j\\/lUd2wwm3+nho+28KjduPWzaIhZsrs9\\/kROwFYgTyf\\/H\\/MCwTl54D+bl\\/XrG83CeNU9o+goJvg5ezxmPTf3Clo0lBc+B6mMPdkC27npj0zBrnmWSGqNfwKuvsOM3\\/3rCUZS4Jo4uMYlVFq4j3OVcrvoM5b+SCCZe1N1MimOLlhp7vvesUBI9na1D5I1KmQGKTWiKfn3Q4ciRQIlgjGuIJoha87zzWdE1rmX3\\/TYfVSw40tP6OGDJkVlw56pVPYwPBkvhe9xbqGBAifQPUATinP\\/ZVykDQsd5NipSaV\\/R6aU0wqKUP5iv0yrnhyqXAjVXhnrcCMd79AWKA6F1gU1dX136AtZZGaaNjmg0kEOrXFSgIo40cZxgp5dFUSt07HdrPckSyFAKwi3j305SizOV\\/ptK4fG\\/B7d+Kpm1ADA6BERMiNiDWkCMyhxLivMZH6RwE8BWLKe33beJd1QTw6GGI\\/Ogw7RXr8kRaE7\\/EUUCqbVnJxvDWB5MvMJA+zyXKFGmgxeuk0WbiV11u4CTqMskLXuNO7CMm6L\\/nit9+AXtdpzszXA7Fpr+Tp5FmCL46hb4VIHhSHAf+uPLaaqbINzzxjgOnwAQkQkJOt+l+v47N2IgAUIKxmp4LGC3wSl\\/lc7uETRB3hPA1Z8TixEap9j\\/t6z7tHBKKntU8\\/5CzOP7DBa+2fPtSC4iu7J5cHk5i0Sg1CbMbHjMA4DB3mcP05k+w9ltMALYG\\/DX5hLPxuIqPJEf4Yu6Un7P0qwwz6vAAOKLwXQ8cCfNHhkVqTffBxkSNLws1E\\/oDRrPQxYf\\/hsoc4191vY7K6mZ1oR+aDvQCP0NNqPEuCP5QsyR5hbXB57e3moSQpaIiXhec4RZd228WZTFzG4qZ\\/JOhGoGb0PMWoS4wvbyV8ym8RNBM\\/liPRK78OboyApqyiRl8QRby5K7ME+mJnIxobX047oxh0i2s\\/IaFa\\/cW6h9oOugdc1EsW8gSiTL6TBin1WKGeWekUuPtilOZTIZaV7cdmPU9RCxIth5h24RtE1fMWaBX9p6QI+JRH9Xv\\/6WhLq0CpvxMR1DAvVucmuG9BvR5Lqe+HgA9kQsG6xXMsME20YaNuMf0UamUgbzFgC8ZODXnM5LYK96FxbhU0GTo+t6qu4+Ku6xVi1vcnF6r9K1K3\\/wGqh0Xp\\/v6QgWoL5aIM8xyto1XYm+0o7dCRV7NYxap7\\/wFP0RG\\/4nO+5Zjf3smhwI8NFMgXoqTSVxyLM7ZPtHaGgCxyX3FVnUqOsTfmoim+u8Vl6fy+l+QOWU5pPmPME7fdKqKDJS+Ceb8z0qZCJX9WDPWF1TW989EzhdGTqWchzFEJuPvj2CaGF95BKbvDyStndRexEB4UAvUcrMHQO5vhbwoylFXWNtMaWS\\/zOU4uGRxldmsgmyFB533reKKKzTWUXUs0poHBoV0FdJlwiWUOySRhRq8TrTHvIhzG2O+fyKVnnpLp8TNaRePmPBhkwKRS\\/Lg2lxrZeODLqwTgHdTDe1RPVku97BVzhIwWlZelQ3qMCNsLdI5VSlNjYZ7SrRVAOiaobiGNhEOvnxA2uzkyKIBaCmaA6k9M8dWpLRur\\/16J58Qlzd7rP0\\/ybl4aCinVtk5mcqIHQY2ehrimslXSztr2CeJv89yy6xWOdR1i1YviBQWMtS11MJNvE+NN8pio4pu81yEChp2HlZdmwcX6FzsAdgGmKkhlEhudVqyJ5as65g+44Q0EJTLqLtX3DW4tKcCnABBJRWpQnAEzm28mX3KT4qk09RQY4lguYm9cjsvoYuuSxe\\/cJjWCrviQ7nFyJ6DuOeX++2NUvzIZ8SIheybt1U1y7EC5J\\/Xa2dtkMtuVDBT\\/5xr44hTeXb753S2mTX2T\\/U38Nai0Sdiig==\",\"cypher\":2}";
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
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=14.3&ustatus=1&umidtoken=HipLZy9LOj7G6DV8St6BPczT53GRCdbm&net_env=wifi&placeid=111111&user_id=2062435438&sn=EB557BF550DDDB0F42451F5641E634E01CDFE75E&msv=10.0.0&brand=Apple&imei=718BABBFD306E93F02574358B53E9AEF98E32121&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYyNDM1NDM4IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzM4NzIxOTcsInVzZXJJZCI6IjIwNjI0MzU0MzgiLCJpYXQiOjE2MzMzNTM3OTcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.oR3y5HAtP0ARxAJjW5AfM8ydTKaHwEI_4KzMdjI7voVHC2iaFYg1tUo8QfPLOJkv7Q3O1v7KHYt5330n9MYMdw&statusBarHeight=20.000000&platform=116&ver=210309&mod=iPhone6splus&wh=1242x2208&utype=vip&utdid=YRjKkqmnuBoDABOa54Af002O&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
         const headers = {
    "Cookie": "isg=BFhY_xjPjWDNeKH9uwaG_1p1I4LqQbzLoFmpHZJJnRN0LfIXOlFYWVIPYeMdJnSj; cna=fjPcGXV0LlACAdoaNxHiMLTA",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate, br",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.4 (iPhone; iOS 14.3; Scale/3.00)",
    "Content-Length": "100",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=2062435438";
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
  

function jsread1() {
    return new Promise((resolve, reject) => {
         const url = "http://activity-center-web.shuqireader.com/v1/activity/pendant/lottery?sdk=14.3&ustatus=1&umidtoken=HipLZy9LOj7G6DV8St6BPczT53GRCdbm&net_env=wifi&placeid=111111&user_id=2062435438&sn=EB557BF550DDDB0F42451F5641E634E01CDFE75E&msv=10.0.0&brand=Apple&imei=718BABBFD306E93F02574358B53E9AEF98E32121&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYyNDM1NDM4IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzM4NzIxOTcsInVzZXJJZCI6IjIwNjI0MzU0MzgiLCJpYXQiOjE2MzMzNTM3OTcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.oR3y5HAtP0ARxAJjW5AfM8ydTKaHwEI_4KzMdjI7voVHC2iaFYg1tUo8QfPLOJkv7Q3O1v7KHYt5330n9MYMdw&statusBarHeight=20.000000&platform=116&ver=210309&mod=iPhone6splus&wh=1242x2208&utype=vip&utdid=YRjKkqmnuBoDABOa54Af002O&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
         const headers = {
    "Cookie": "cna=fjPcGXV0LlACAdoaNxHiMLTA",
    "Accept": "*/*",
    "Connection": "close",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate",
    "Host": "activity-center-web.shuqireader.com",
    "User-Agent": "shuqifast/1.0.4 (iPhone; iOS 14.3; Scale/3.00)",
    "Content-Length": "735",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "actId=355&miniWua=HHnB_Sv6jUq0rn9wVG9MeTK%2BsBJgWWFb/uYbrOgY704RpBmcNwWsSC/aEgPhfZeM9/M%2BEWN9BkxtVmo9UNgAI2FfrKnnT2jFjh0K7Q6nArIyKPx8dNHLlhFib0NiTCcny/51h2T2RCjEgzV248gKDGy9Suw%3D%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1633354630&userId=2062435438&wua=ktgi_uBijLY1jLf8qqUdkh3JKn8oqe56ioaPjmcmqTfYfw74lIVeoGlHLQuH9Kun/2xBtslaD1RnGY7r8w5JMpqP3mBMk%2BfMWtdLF6ywnOo0hvPEliFyT/ItZ5WiBX6TpJHahD5xvaDKD03cRRkiszDGi5aIJ%2BpbBMmFoNCF9DXc%2B7Dv%2BXinYeJV9A1dqjVC28YwboQwZ/d6Ec0Q2NX30vUlJucmx4SOwUCkRynivrrbVtu5D/O8p5LKXAzsjLYmgd2DdySjLK/%2BtmJ7qzFvB/%2BVfNDGMVppadfZdV99mSzUu1wagkFYuRIK6xsARvbniJctsSVk8XzHeXiaffyV32wXS1U6ZmdSO6OOt%2Bh74R9rD0YpuQNVHwZ7hPP%2BQgmZlU1JNAhFbvdT1%2B9mWNV27H/xmAw%3D%3D";
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
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone11,2__shuqi__v1.0.5.0) 1125x2436 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.6&ustatus=1&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000",
            "Accept-Language": "zh-cn"
        };
        const body = "clientTimestamp=1629015222&position=601&signInType=1&wua=ktgi_8VRO4TruIk1p8M2lu4SpGEzaHDS8yDsvLX9ElOXbMfnd1LjNgtGaPI9uVGeguslQPCNovWQkeiNgYg045ifWzfTHH2HwwhOb0hB07utbFqcSDMCzPCnYkR2%2BKfo%2FvaTJEFwsY1u0piLOQPACgubCVhTE4tZhr2w5PB7PWngoJMmoveydRzSmypRS%2BsTvsR0eHR%2F8hNUKFo%2FB304Uui%2Fl%2FqJVEbdF5nDyK2BwgjoLR5d7edxLKMtgNunW9TbJ%2BGLV9iHCjiM6pv5brTvZuFJu%2B46iDUpPEDt5cqlctf1U3reO4Km%2FMcUX8GVq2rua0lWG&ua=&miniWua=HHnB_JDcbWxm1YICXHWnp2SwR5LW6W%2BQYNxFuxH3SNK5LQbvFKM7QJvQAXETokQrv30zErou7AkieajiRMjjBA5pdxkMJ0MU1GDHFr0PjpKRa7scWxaK%2BM3XD%2FCXy2muXzZkp&userId=2916901745&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629015222&sqSv=1.0&sign=2533cb79da6874c1555fac73e7072980&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.6%26ustatus%3D1%26umidtoken%3DCJFLLxhLOp%252Bu3zV7QyKs806Y%252BvW9YrOA%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26idfa%3D00000000-0000-0000-0000-000000000000";
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





function dailysign421() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.2.10.0) WindVane/8.6.1 Shuqi (iPhone8,2__shuqi__v4.2.10.0) 1242x2208 Winding(WV_3) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&sdk=14.3&utdid=YRPHOvDewScDALPRGBH3kbX0&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2062435438&sn=08F7FE3B83E32D8F65DCECCBE4629C63178A61CF&umidtoken=p%2B5LoHFLOobJlDV8SnMqY99S8QxZTkwk&msv=8.0.0&brand=Apple&imei=59AF196F729EC9BBEE11F988A182A7CE8CB76B9E&skinVersionPrefix=1&appVer=4.2.10.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYyNDM1NDM4IiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzMzg2OTU2OCwidXNlcklkIjoiMjA2MjQzNTQzOCIsImlhdCI6MTYzMzM1MTE2OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.FY0NUpd1AmbU9QFYY6f3lA_0GaJZfIn5SllgcchRHLWAYf7fhs5UDz6pd1a9wZID0f4ZJM4HU_VMr78B3q4XMw&skinColor=23B383&platform=iOS&ver=201218&mod=iPhone6splus&statusBarHeight=20.000000&skinVersion=1&wh=1242x2208&soft_id=21&utype=vip&skinId=999&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1",
    "Content-Length": "2066",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1633351472&position=501&signInType=1&wua=HIVW_g96WoYAJM%2BgLoF%2FJRQHzKq4%2Fu2w1%2BxA%2BIpTxFD3gAT8q2YUb%2F%2BfOstmf984S%2Fg64M%2BdrrnhdsiQb7op96G%2FU489jUG5pMx9b008KlGnxnOENnh3lAZdzxT%2BApJRXJKSXRXhbh%2Bw3YaPhLlB058ONttVl5QL4HA5s13Yt1IUp7zs4Dajl%2F7eYPnw2ZPOZR78KWdFu6%2FofZc10v4%2F1PVoJfQw8zyGUewspUy05JyiQkAbSSh6LLYuhwqPRkOSGDDEkXGuLGtX53iOOyMkIp3b2N5vqxQdYGv23DjkBhTnTPc5WMWqr%2BieduZcCimTa6Ds0mwz06rwiBaqOrjWAz%2BH8zYkf4fnOPSyOyHuGbS%2BqfGN57Qx51xcOuR0S32O1O0Y4oatS11LKKlphTCfi2%2FrEEQ%3D%3D&miniWua=HHnB_mU%2Fe7dzUaDdPiQHpmSztmguUKJx1byLr0EjyGRAWjJq35t1Ra04aKJkALjK0RTs0nj90r4FiZkXHcNs9HFLVvNq7aIzgE4lUCiIBWVuv6I6Gu42In06VlMpC6HPl7GxDq%2FA2ZDf92svJVgShACwf0A%3D%3D&userId=2062435438&umidtoken=p%2B5LoHFLOobJlDV8SnMqY99S8QxZTkwk&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.2.10.0&placeId=111111&timestamp=1633351472&sqSv=1.0&sign=66941140af61ad9048017af7381a1886&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.3%26utdid%3DYRPHOvDewScDALPRGBH3kbX0%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2062435438%26sn%3D08F7FE3B83E32D8F65DCECCBE4629C63178A61CF%26umidtoken%3Dp%252B5LoHFLOobJlDV8SnMqY99S8QxZTkwk%26msv%3D8.0.0%26brand%3DApple%26imei%3D59AF196F729EC9BBEE11F988A182A7CE8CB76B9E%26skinVersionPrefix%3D1%26appVer%3D4.2.10.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYyNDM1NDM4IiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzMzg2OTU2OCwidXNlcklkIjoiMjA2MjQzNTQzOCIsImlhdCI6MTYzMzM1MTE2OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.FY0NUpd1AmbU9QFYY6f3lA_0GaJZfIn5SllgcchRHLWAYf7fhs5UDz6pd1a9wZID0f4ZJM4HU_VMr78B3q4XMw%26skinColor%3D23B383%26platform%3D1%26ver%3D201218%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
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
    "Content-Length": "4783",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "{\"message\":\"2rJuTElC9nOl5andWyqJgvEoahEtVi9hyUL4Ts9KZwLhakjOZnCpPPGCIXwB0pu8Xnv1f1Z4Gh1sbGXhQJNrKWbCPZBUdIK9uAqQKEm5mBfhY2OU4tvEABSYCDUzW8wFmSS5b3dAqzO70WU\\/vwKi6SpbmFDNWg6FFDpAVOvneCNzUx6usXIiv1rL2hKn\\/Se6mOY2woxAnqni4lzM65F17HdSeEI10CP0ew6ZqMieLUoBz7fQ3UaXqKyM3Zo2XPZt\\/ywPOwKwhx1pE8vNz4cgZdJapT8q\\/dDycLwWIjnuuLIe0KAydmS54cFENuMwONRSaT55jdsAjFtcc2IVrRy39uJZUvOwRhEklHYgaO9ggJgKhgpP4mmgikctY0ysP8dynG3XwxRDhLZbqFzVdp86bLO887VVDPEZF3rfyailf2CmYu9GuH8ESGQ6ipPcSAlNEGujJZ3HlII3R7jcfq2r7alGZWrr\\/D8gg6pcRnEEZ0BvGhj\\/Xu+FQhOSoW8GMOVT1dPmQjeJsEAkwDOkmr8O2uW08vd8yGWNKBvGMx6dXZXGZebhW9V07JsjcKPueRSGXi0qTYNLE4+W1+bgvDFPWR\\/zY8Zz4BxRd4UoofAzgtqdYJhW0eyJobrlFgOryjzHqWjD9p0fhMnrUM8zu8gESi7J+Rv4\\/0ODPSk3sDfWhhgNSgXtYFOH1wvxHrNZ\\/B\\/k15Ji\\/EqxHon7lgzY+noFzh+yJdctmCvfoX2DaHtQ+\\/Fj\\/CjaNxp5JvhIGDOC\\/hthmgEuP5x0Kh9L8kts27+j0sGrolCxLj+Ist7wfbH\\/3q9hM6xiUmo\\/Z7c4lhwkqbGgn8i0twwD5jU6aoQEtVm13NsT4vQRUbfBP47wIl5do37E0nw23D9N01zDW8MEZNRnuZJNvSqYToX83Ii40+fBe9G2yYG3A4zl5TCvUoXJfoSUavwYfxqGjXi56uz\\/YkNBJoeFBNtnnqSzW08rAx5WdBKmJHQOT2iXp0MOME2dkey7h9AneYyVn3NaZaLsV8Gv2gjo16\\/977AcfhZT3Uo6mHGLvM4JyV5wnV4hIx8XvoEcOMx9l\\/VlNB3xE9zAh6RoZlO72If8hzL0a6rsQ34wW\\/LyI3ItuARH25Ig38nw9ZNrZJwDYH9MKQVGTEEpbzdl5fTpzxLksqGdJ\\/KYn5n9gpH\\/VU\\/2W+enHTMNomRvGck0V0IV3qoBleP3YKg3BQflslhLt0JgA\\/zuz781N5bJ1ffd5xnj9NRl\\/zQsH110GW0NsgkMy7b5T4qR+ExgSfeXglbbE1efeNgeYmp7vEft6KdYwPo6uqSa2V74cbovvhGJOx6eLP4xKH9G9etcslYJlFocWZE4yNuYqmlBn8y97TWXjtII\\/D6sxxvdCLwbiunDv5X4Xryy2m\\/cUtliALQlHwEaF82jcnSYcsImLqyzWuUdhL4PP0wLp+KR+A3I5QjGK3Ezizbl8xloGxTJVaJzBI\\/BaSXAcE\\/p2j1AAd2bKDFwu5cellrLN2NudSyXwK7\\/EmM1ve2DCdywW2Jys+o+SumK37bd1Fm8zyQHk3nlac5YrgGBNXZUZnKyXe6+7gEUqCkwMUPAMmLmbVLVl9C92\\/ppbQ9X5LoiXQ9HMvSFe0WJyIDGyAD44KQTuj7uDFwpMFIi5Ft3FS+KtY1FgFFRaMcvayitcRRd\\/UyGdmZ1+0PXT3XrvhJKu8QB5oabcOV2wtWLDMntXb0X2q1prtiDiEqkNCzMlOgyXyiE7JhcuAfK4V68pRcohPksNqJpG\\/ZZ2o33mwNOai+153ynlr\\/FePMR\\/EjLwdYIcN7F9A5Eoz6720LZdXNejmwYpii6YrdDdZp8ok207W5wYzMogs2tiDXOUZh11gK9hCBaUf7eOABJRYJypLHPcK4r27lQb\\/dUJfnsGr6LXKlS3TcR+s7MX9jABgSRx83Yp6lkvGHDABVOaFRqOTRCvdazyh67q\\/DnREwW\\/SKdHuiH2\\/PO4G3WtNE+pSOBZj83duj+Es5j\\/Su7cCLZ+D6nPkJ772o5l7CArjw19V4ZVIrejC2vdh1gNu\\/f1P12LcaW97lIVsK3YYxm8Dz\\/ogJ5fx\\/a5xrgT9iJkI3xX\\/nwryGYQXihfFRgBzuYOkQeUS765yZb7qQV3lSRtUXLtwnhNXQlMG71dlcoltGM9M2oTVqTE7ETh1cb2XeBQSqv0SnJj37Clux3uCNPsJNsNT4271BJCQ7dU8jH6PmoBnaLGciunuNmMts6HeD\\/kEyKg2WfuNGLMz6fbmrGQ7VtNPwb+wnpW0EPONWQsfexadv4\\/IJLHS4gWH5fhQz\\/9ZZCG0MzqmbEr5VGvIhxltHnK2ShLLqO+3YTsn2vZjVZYJT8jnBxWNoPciR6jmyKPDiMsPk6UF8XKDPfVUQdXgFXZXEy7bnUmtDmXNXrwPjx0bptST9KabylDYEzmdorXqfZ9ZIjkFLWGwyLRH6uULtbcGGJw8Rcu3HjEv58sGHPTQnfVDTSWmKWeVqpmilJmhAMBex9cnPfLGuxl1HfIjKNzcXVZdhD8QBJ7Ul0YjYZzc64MaUlQLnbRwVu3dEih5ct96YiQXFn9S154iWzj4mUtINqasXaV\\/ZwwPdSO9wHy6+f3bmSc3WFQV60sVsVcLJMIzwpjxvojMxYkTk2zFI3NVlJ7ZLOSEEMetiaSvZkUWR9JwhXpvyWnMhvUW3XfaAxzefkiVesqlG3gv55ddIJYYtE\\/r1YjgAg1ZdHbR9dyeiefnZj5Vrm+4pfANvEXq263GrugxTEDE0hjUD2\\/\\/UYpbZalpXB0jDpjA7U0+w\\/yOwjkmvkGHlSN4\\/iCVbxeK5xpupQnihc1gjQ5XzMtVTLUmAWy0t+bZpOQ2rsVOG5fIGI8wANdeDuTR4vk6k1a0K8pp1Q36eO0ATMpdVpbU1oBhiMCMQc6YfL6druyDq\\/Dep2Hs\\/Q8fBPNJTKXYZtF2e9Wycc3S++2M6\\/s05AbaESbnYe49fwNmTVmJJCwZTQXxYCOGCQjH\\/rePyEjeHBMqpvxeOEu8kVvF4Li7\\/ooQZ0X78ecvSiHfuvntdOziHrLeA8Ijmw46790pu8Xnv1f1Z4Gh1sbGXhQx+ELTP5Oiiqlm1lxZXGprBnD84VyAPuK9tKRMJ1ztnqFPCZXlUoXWSvrIXWMErm30L+fX2aAS5DWp2QaKqRdvI2Y6\\/d\\/Bi7hD0RXC6v9Mz8DbGSUNIZ9DUwVQcllM5EIkR3eI9mSebHA69pYWF3x\\/QPGZJQ0Il1+aus4dCDkK8861BPc2sC9cnskRFsV7XkC01oQpqMICgV1BD\\/iW+W7EsZ3SYcGDDjD4PtmHJNfGyNzjcWE6YvrMRzxp9E0gqigfOepFwnRyyXRV6GdrMFiRJ4fiJIJxqyxHTVSyTFOuvDWHYW2yjRhWPeaHCs6zX47ZtjXdZxyyR963JDMCUqXeU8qcI3bhQyvu3hXfJizzR0O4a0nRNX8KfH0vKZramo4M3sqLwOEnuThhC8XrBrRwXXhQHSFeuTQSlWmO2nClNBmgPM0zw3zBL20mRWigHQqrbNrECsjHMKHUvbkI5wCPO6wT9G0\\/mendrNewDSdzom5dt\\/slodhtQ3Np1Lo\\/1e1ty+\\/FoPfunHRjjMyJNPhoDsRfEPXBRBIIUo1wnwN1\\/QicU5Yvv\\/Fz+mId\\/T7jYGx2\\/kxLkhMazs3t5Wmw+LSK5wGMdTAvzlaHOl9hpnsDRPcoSXQF8QXkAjWCFvADHjyGN01Gj6WekAY01GXw5DIyzJHOjUu20iKV42TfxwW99di60ywDcbp77NoH1ejWRNqb4CixRTgrHALtszqqNyUhYo3kPddnAKLEtCMwwhZK9OyCBLxc9PljTYHYMQ0ilLQ+sJGUu2xwE\\/SKNoIB7c2M99EINNFEYFw2q+mQYG+\\/UBdCTYL+flb1GrLbMRhLGQ\\/qPrJ9r7cxxb\\/fYW8SHg0osqoZwElHAJ67Vn3Q8k2\\/VmiFVQys+qu7aqX\\/479KUjz4JPVxPGlCGqrBr7YL1IAyKY1an5S3bRGbvA\\/4Ehf4IrQaO8nDohWCKbYYkFyI4Xihhjcs6OdkRtvIkKWVFYO8fBsY5ggGSnrtHqajr5WPJq7bHqlELW+1B913WqQTICWODcSN+qqqVwoa+CkC8kdikEpidk2u\\/TEsnvGerCjSiJFDjJUlngAjRM0haeuphr5deRCGa993+lAXSuAtQO03oZlRJR0LihuD5MbzaWdGhsq\\/YUCD+CrN2QEL\\/zxWxutxfxO5uk6FJYj60m4XO+KauOZNPUsV0MzQIuiat9VAhaU\\/NXzIb8roh7VH\\/Go\\/LoBlyMYByg6RnDZtSZPifh0+cb5HYa\\/Pz\\/skyqxZTwhEkq78\\/rYoOSFPeOrr0q+Puovua+wzEXzDKD3Ifzw6FvDGmpXBmVgAk85zAT5qt7vin7dMwSYWoOapgO9Z4Vqn7OCpSPj8GiNpT+jgvhQYBj+Ytxr4k0YZSIoVsV8DWbwbyr9M2I7y4RBD1u1uGN4RznTgPr73qG3uGVXsld\\/z4v6cSHPcM22E8it8fyEP4ZwDC0p+CuhXIQL4aRU\\/D5Se\\/9mZDB+epUeVlfJ5kZ8b9WBPY5T8pLAvc+SKGn4cnvkIUIaJbqli4CgzgbU8Dn0AW6CEeN2pVIVW63Z5euzrzxWWRZFz5+J1wwY+AoPziXg7Gc=\",\"cypher\":2}";
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
    "Content-Length": "4739",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "{\"message\":\"2wrXkjGDMIHMQD93jGCu3shoN+VOuQnffLjsXsEyJmG24SbITiG3pJJ+LBYGRnR8YrI1RxjbBFWrUsTzsoQLWPv5awztc04nUs2\\/v2hu4yBzdfFs6muMi6MTcV8eaPYmqD55XTendPUJsaoKwawmCYv7sM5U3TkRCYvaVoUXtnVy0bufOugXrJGgVdsuwdh4XElsggc9Tbjals0R5QBQeG705OBfHD3+mewG+MDH2MB1i2IpaMMLOKMBYrXshVTcmZdPSOD+SSxtuhKtyYD93nHaB4X7j9CDL3iZX2Hdjyvv7WKODfNmn\\/bmMcGqP\\/ucqUc9R1yOsWYanQE3JTEbb2EGyczWG0KzAQjvANpnB3oUiPnv3wk4NDaNJ\\/he2SsxtQe2\\/kElYoymaPVRjKoMn\\/PaMEUBkxwE9xHRtT+WrqNPnUaXyMgfQO3RNaSZorndZDHRBaBkg2eYb8VGLYsa8apcyq9OFPvtLPEDL4+zBYGSCBk4v97p2tE8+sYKb7Iqr7ulGEWbOQ3kW3LfYHL6m46H3fU1YJ\\/hqmtqy6+Z0uAttdaIegauw5OgAh4q43TgjGSWgvRYmOvdxrVOCtBcUsKYxM9nluW4KgBzusSXQjPkH8iq0W10k9glmU7AO\\/j1FNJ4u\\/krml9U6kgz0sM91qUgxW77R1eGB6tmeWfdb9fKJmmRqPyS\\/ouUM4ola2IG7vXX5C4xnxE\\/aPn73iqyUXbul+TunofCZF9oGAqm8LyLO31l0ygfnNLJxAheuyCeuH4lTZxT6vSKoHSB7YDg4FF6iRncjvP6ylYtYRS\\/KVLiyvZnA+o2NZYqKi7kULCpLkx4yYYEmT88bRZyxcnc3+3MPC2FI6sXFeaW1fFKRaK2KvHpHFMRmtTQsbqT2Ehv+vNuqKhQxHm5OD34fHgCzifkFkJlVrnGzZAJ2\\/sn2wTnXKzeLBXnh+4WjfYExHgED08WGaVTwvd2bVX4epvg30+D8Tc9jZQfEki8p7I8Cl+YHPAYZe4Qq0VP00HJNrNpdi\\/veRFF0VlDE2N3TJpD30Mcar8csRK\\/Q+MhBe2hmihimcfSORoU\\/u3+a\\/iUoqW+TR2jydHdNRIIV8uc+FNXeIpsvoM9P5\\/3iTOTKMjye8KAMMR7iEQyFmSEBtPL0ThqrO+IllQAoIAtTGMAY7nz6zmMoBqcinI3Q\\/mxyMBETf6W6rAa4Fv9lqThANgxImlgPuKK0jZaoLICkXBnOyGax8DWsLxqi3jPnwLgYxZ6UztPZRQ\\/WwIXKjvIRBt7BMv5nH67FS\\/37pvw0TsU9jEmX0a0wadKLuIw6GIlL4QSaoDU74\\/sTfoKIbJuqIQT\\/eK7QWqDn36WKg6v7gCUvSj1ZXwWH+TbyZ35uEutUdf8nM8cMHdKME\\/LDdEDQw3w1tDiN+trennOiATUFC2O7Xsv4RgzauyhDmgvQoXnvUoWOcl7YqlWWJ8fuJ7369rVJKfJa0FZTVikhyqdPxekt0lkLhTNIxdj4pqJ2RRax93XRXwhctCTnWnlgpaXlHshreYBcck25q\\/+50wpvITEQjDkznKLAHiSNFJqAm7Wbx4zP91QV0w3rMcMS\\/2OriKGaL0Cj7WgUq5+F9N8pwd3KaLkvpwRN9XL69D3NDQ4HCs6Dgp9+O7qXFCHjeXLGP3joAJU3brKhHEUDZ9NbNykZg\\/MoIDMCO9SQyQYXEwmhTYrGYg00Ssm49gK0JTOwXgQWeOv5ihctiixEO71phisO\\/nyb3h8EM06BzRwLTSvGvUA1lvBc62mdk40CvMLrDMbgYQd25ADZHLrBxCUToRLNydsdPpTQlWZN3cZFWZgjj1\\/a1VAebkKP46yatafqnMYMs3WA82IRreKSUelY7Tg4HtX4qC9l+L6mkZHLCTlVHHYZTVGXfb0HVmUaOBRRwdzi5LEUlYAGwYrsWYbofaeBxAp00zapbiw41X6qrK2aTeYKBoggMf7RoCYwJ1mANkn3xpKNpQyKjcCjV+Mpbc1qsH+AxDPW2N3mJnf7JIg8dYfIN9FT5G5viBdM2RaNg4X9MG4E8pGHhcJu0RZgUYiTBR0zyVLng6NjHJTpv+ngoMBBa10isYfqWAzq2kxYIZ8l7bREdMng9WCJiVOLaBpwlHj1e843nXJ+Tnl4rAjxUJ9FslxTWyFeudd1wCUOS\\/GOtxe8vshfR1XFgw1V\\/l1sPXJM1t1AbLj0OEuFpt9qW0IGbbzzGUaIeUHm1UaiF+Sf9IgfhDOoP\\/SfWMs86zi+BLeY09p+mOR8iIr1xYYSe8upxv5eM8Ct0HbzBuy\\/E+ME1pogn1KGQ243pLIKjZDQLR46\\/V1doQlfbV1LnUcgnC9U15yA1Qg12Km1+eld9ZQKBJaeh5qgNIPvOVOQ\\/7p1Rq8WqQojY6MAory+cpjJzMcHAtij0y++4oa7VHsyCmMEKVmTAGxW+ihkvxMYZo+S2sSe3vaX9SZ1IqvSGnw8W5vFGbxgtDktSkcaXqYbNsCIyiizswqFP8piDc2Z2Vdq6BBwY6RuBbqxpyu6nWdGVa4lAJnVUth\\/GoUifliseRlQc9mKL1vaf9\\/HB3FFGHwFyO7B1LsngB2wmlLkRLx0Dqv8w29Z84ZOVsJ+fTuQ6jQD8GX8PGWB+E937wx1kqVMORGD3o8QTKpUA9LGtQImQZX0lQFzimsqTTYAg451Ph2ftCYOgrr2GzzW4D0OsO64DnChhJ8H+iIcFqel4G+2NqzEI3MShRvQXvfFJqHc266M+3WHws0XB1i00xpbAR3JaiG2NkMAgj\\/+elqTNT\\/CLG1Kd06Mz0CEs3I2vxKO4O9nyZx15aryfAIlei8YdvKkmuc6ZxRJ1W6PhTYkCUcIzzJjef5lN7YU70xiJSJZ\\/\\/Rk+tEtWASx\\/6QafSDTTDmkXzk\\/c2MH3Jb\\/qMj3BU9arV9a6gneh9n5bMF5\\/MR5uWiKjHzr3pthjShyU2CdFmMknLmXCEzJSEAUbo9vJQ5ErXx5AMAQXzRi\\/RDtZuzdwETPrYlKCeEWjncQvRlTXQzWLbQKY0\\/Yc1U6E8MeIxsMo5GdHxisjVHGNsEVatSxPOyJBRMLscyc+xWexYD9xAiTe8OXO9QlJWk3vdOd2r74aslrXWQAergxWb2V8YK82yEkYvfHLxgu3dpMtZh+XwmVlv6Hs7iAeAZpmYErtndzxIhky7dMUhY1Mby8pM1+En1CCgmU3ecZUycgixSB7BmBe2imWxYiLK\\/rMYNPV2R4KnWIC79KX1CSGBF0NhZpcHu45bqi7fAduCg9+k61huPT91WTcHuW+hOBzn8rdmz3O1M+5H1nmt0HBlt0D6jCmshj5bbaR15Z3RcoYo+hVml96unm7UWUP4FhBG+IsviO0\\/ECOQsVRbrHeMm27wZr0FLMQeQoc0DeBwGGahWlPZswo0aWVt3gE5U5RVmDFYV\\/9ow5FUzZ3EdsnQjGUxbj+D6z5EwH8RMOhNk6Rz7DX\\/6Tbj6WcU6bhE7QOpizzHDiknYWwnycCzU4gdW7xGzD5WLcWaZ1kNiqwdKH2+t82VpTYFQWzXgh18xV9bZqzAC7WTRbXRNQj59UaIMnFBaqOMO8+KEFWfjMUNNTq+J3CcgfGULCx5t3hpq7JS\\/plNIb8mzIDHCPhvcSn19q3Sx4QK3nED7MASSV4EPlNn2mJYGHZsW\\/ZpCS7SZ2z5PCONFj1tEWwNfT7Tk7keWCVQFbWuC2R0uw1hB5JOCg3qpsvQtZtI8vbGgo6KM+gofdKUNdRKzNB5hU4Z+WT2be1cufbs9WFkK5mgjbYQ2XC27cAbsKqYSose4BOQXtXcIUMMXAwX\\/sD0XorDBzATa4WORIH0Dhx2sVxJGtdixjmOD4J2NsRUIopJ4suzlpIpDEZS7So3TEtuFfuKzgPD99LoO5a5OgeHgLvDAtUhH8IJpmp6ZCCya9pie5JjYcc3pfxknAmGeuuaII9Ty8JikUN6ux\\/ZGmFPGsIb5+eeL3t4pLjJhJ1jSO3WWaNtNTSEAmmx7SHhwBXegYGVqzy4ZbFsvzc0occKFJf8yKJlwEnE6TklXNIci1ZdZWfB9FLjAiUWUigaqAcpfqrP6yfEvB+LeXvBbmwdI6hrd22S1T9iEJaoCd4LZLWC82bgk2c3cXneomZ18laLOw+7QT69dphR9kYKQgSjrLQ+\\/p8c8Q1vQ8uGXA+YdNi9cSvCIXrnt54ebDJO\\/oNM+ZSVhQh2xliezqqDyOTT0ekD7Y\\/bLCf7IMu9u3zhtMlZD74\\/tJ9fhaIpRz4FcyFOhobuY7WJMVwctBPtf6LVsMqCxNLD6nyT1KQBqgGImE\\/8Us1yjTdhTUk4lnDaFBcUQL3AHxGa0qFDbuy6Fl\\/RhAJiyeK3VPjBUsVc+hXORJyKa\\/YTdtZQZgYu1QPYVqZyWYo1RtuU9TKLuMWvMkezf4RiG+g5\\/bRkTB3F7KEsY7276Oq8jotMLp1D0Xsk6mwLoAJcQ73vZREQZmLs0S90ouf4nbbssZiMKIyJYJ7AwAS8YLv822vKTraT2hPv3am3UtnFjAr8Imbfsug8sv5fKoB6U8gNFOceVsTZY9\\/uhD0Datm7HBHC3M7ac4TpJsdl6uJ33BybnPLdS1vWVBPwGJvvUGobKjBLYrL7hVrOxBuMs+oAFZhV\\/YFaJNzg==\",\"cypher\":2}";
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
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.2.10.0) WindVane/8.6.1 Shuqi (iPhone8,2__shuqi__v4.2.10.0) 1242x2208 Winding(WV_3) WK",
    "Referer": "https://render-web.shuqireader.com/render/wx-activity/page/lottery_page_red_package_rain/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.3&utdid=YRPHOvDewScDALPRGBH3kbX0&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2038268844&sn=08F7FE3B83E32D8F65DCECCBE4629C63178A61CF&umidtoken=SelLoCVLOiHUyDV8S6TL%2BIw%2F4hHJKoPV&msv=8.0.0&brand=Apple&imei=59AF196F729EC9BBEE11F988A182A7CE8CB76B9E&skinVersionPrefix=1&appVer=4.2.10.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM4MjY4ODQ0IiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzMzkwNjk1NSwidXNlcklkIjoiMjAzODI2ODg0NCIsImlhdCI6MTYzMzM4ODU1NSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.3-f7HZkckwhsOcllRB_7l0ZlEc-2vhOjzPsQqh4G_w_1xAEI-_2gUv73T-mlllnSEdhZX8h4v_01xgYhBsPazg&skinColor=23B383&platform=iOS&ver=201218&mod=iPhone6splus&statusBarHeight=20.000000&skinVersion=1&wh=1242x2208&soft_id=21&utype=vip&skinId=999&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1",
    "Content-Length": "2157",
    "Accept-Language": "zh-cn"
};
         const body = "activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&wua=HIVW_H%2F3bRfdoKE97zAXb%2BCC9JEKU9gsICvzJGHuNwKpIIhr%2BxvgSbBXACgvfy34EnNbLcTsWAAAo64hoVl%2BiLybfWnRaMe8xDaJFeu7bUQAmOqAfevBEFrjr8wKbaUoq8PQx%2BntE6rXXazwYdzRyXU7Bkppt0wO29qTJn7S5NiL7OwUgE%2F%2BLb002qGApmwH4NQIcBRkYXO57guK424zxQVznbLB5xo68ptrS4A8sOS6dPW70QcX5LB8j%2BEJGOfSHsf0R%2F9761hwO76fvP9rZHXLxwyH8b1lcRTpAOcpl1o%2FgbjE2yfTIHx288suoYtVg0etYk4kOOHTEiSdnDY%2F%2ByyKCqMGPamBPF1yQ%2FohH07PzP9dfYOC5dF1pL0HZJASddUqTbL4Dqa4w9pllv0726%2B70KA%3D%3D&miniWua=HHnB_2M3RjDKlePxTPAkIFrPqrpiY7w4x5ri%2FLfJTtvTBnyClqXxwlQt9oJjQ7BLFomNouQafpqeD6WDgBLCP8ChCFAkhsyIvD3NUYiih4CZOEEBvK4bcpJsgLsUFBWWou4sGJSneleUCCKDEohSYVTX6cQ%3D%3D&userId=2038268844&umidtoken=SelLoCVLOiHUyDV8S6TL%2BIw%2F4hHJKoPV&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.2.10.0&placeId=111111&timestamp=1633388948&sqSv=1.0&sign=a2050f71366601af36b8952f5126ff6d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.3%26utdid%3DYRPHOvDewScDALPRGBH3kbX0%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2038268844%26sn%3D08F7FE3B83E32D8F65DCECCBE4629C63178A61CF%26umidtoken%3DSelLoCVLOiHUyDV8S6TL%252BIw%252F4hHJKoPV%26msv%3D8.0.0%26brand%3DApple%26imei%3D59AF196F729EC9BBEE11F988A182A7CE8CB76B9E%26skinVersionPrefix%3D1%26appVer%3D4.2.10.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM4MjY4ODQ0IiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzMzkwNjk1NSwidXNlcklkIjoiMjAzODI2ODg0NCIsImlhdCI6MTYzMzM4ODU1NSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.3-f7HZkckwhsOcllRB_7l0ZlEc-2vhOjzPsQqh4G_w_1xAEI-_2gUv73T-mlllnSEdhZX8h4v_01xgYhBsPazg%26skinColor%3D23B383%26platform%3D1%26ver%3D201218%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
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
