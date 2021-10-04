

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
    //await $.wait(1000);
    //await jsvedioreward10();
    //await $.wait(1000);
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
    "Content-Length": "4758",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "{\"message\":\"2Ot29QaU7izSxPUjINKKUKyjUCf+1YKpaT4+3ZbOJsrVhv47YI+kinuUuq0TIFlLCuwqxyaCcTSBNx56yU4MasU+OQpUSwTPwuuUWKLO6AFL6Un1yg+IesFc\\/12hN0DR04M4bX6Zbpacp86\\/0dNkQYnuYpP\\/cgOxrNIQK6+bNkqyZ\\/x2PJMnj5ENe5us8\\/DkpBkny2J2riys+xic0nM7ianc9XIurOlZ7vGi8HnGwV+lKWWjIPXITaqr2DWfvnUbE\\/e94dXYZcSPd3zm2OJpulyPCCSxzjxZGCSWKV4mtN2pWKL2UVa1FyeKPzVJBFHIslblf\\/VHJgQfP2N2jTzG6ztXiVA5lCCcIzpInGffklXGNUG\\/8i7v7MP2T4+H2As7V32fds5R+t1SOUFwmFY\\/WcnV\\/6PrnomOuO3JEbhIHw80UMENzTn\\/kym5pApnPpFahQbV6r\\/U7a\\/MM58JtHqYYL13lYzKXM6XqVh0s1\\/CXSxolxA3ThnoAAgXb6t9kCR1TTpilv\\/7TjntmD2ldS52lWZrgG8s310Z726pS1MjDLCD3aRtvkWD5N8FMvqsWQrkeTgKTSdw7dTxu2vOnscIqed17cEt7KJkNBrX3fwwjzT3qCdnJueV3jpS9FTk7Oit4BmOvL7puHHemsot+dNsi\\/hvub2Tl3QcqF9QsicJ1SzKGfvEH9tAtDEqa5rXDfy\\/BYYKHO\\/loAmrDZSqmETR\\/w\\/AYyqwclox86uBaD\\/46fRCtcz0CkKI0udJN9VKo0NLaop53Nka8eK3HP8DwP3VN\\/JcbUgB0HvpvMjf38mOvpXXf\\/ZARQ\\/UA9BR0r4YtUHEuGdix+Kb8k2q3iq5+e4s1jjsN0AvW\\/DNLtvvr20\\/xr0xi6GLLApg0ZtjL5Y02P2smeugg\\/Z8+qH0fbb\\/Fb5l\\/vS85ewQcrCYouaHvmJvZWSPFefeKTUj1exnPEjZ2PTZwhONh3\\/Ux9t3w9vyZjNM+E3Hy8HI8CyRHB0cVFKMeGTpvsp0ZlW59mMFMZNeTGMw6LmXyMt4rhCf4Osoc4DXqvvKfGH8pWqgpnVjqJsgblcZOyu2xIHDeBanJSnpMcnQTNWm9RHmIT+KA3SS7a5ZgMlBWN9RDAA0xvh7z4FzwH6gKp2T25GpnnwD4W\\/\\/5PquUPR3NzKYuRTyx4DxUdVNZFlnDfAeS45FGnum8MilDJgaTzFLMN8SSQssZg6jdQ2HZphXd5CSI0u92Ah5FU86hQ4vEa6IdrDWgvJ6xh8I4910N46bppf2vA++ucCT7oirff7bpJl6hd6KVgfwrRWw3QF3q3xWRWsb39lGscie6TTsC91g9gGd01jJlKzveJcDABR0PAoMmZHrrrgGWmdJcjyL8HXyGRslOl9ryYu9wavxWc2\\/XYMZf\\/fZkFO6RGiQMw+j43+OQfMemiAAkl3ZMD39UfIvkLRfEZEuyfj4MJwkxUzMg5tFLeRaGyhysamtTt8CAwtbgaBPdvqqWzXsamiPHst114pDCI5jrxyD\\/hSS\\/95wnGZZMTg0iHBs2oTngSXzG3u9wpjSIDFyocSn1LW0\\/oQWopFtciX8wCeiQ7Zb\\/kixo+SBbKqc1x2D8\\/GvQUmLWi25XPsJWE+LrMCmX8Hf2TVlQOk2NwSHyipwbnb\\/XpR+wMfAKgLEBlw8\\/11FalsO0bK+hQmYhUonBtE2\\/txuyA8Sl+kMo7dBBrkQfgPfBvzqmn8dl\\/59dHdik8Fi8dWw\\/F767KwMaybu3KkIA0f6R6UNY7SGbf5TvTcA6iQ5LBNJhYex+jAzKNlpM0vsep84B1nho3HobRNZZzwtZbRkvfN5mXHj\\/asFfMfvpoaWEgLGwzKIJEcECU8v88j\\/lsGqJMTrE70tb4uSeCabuzF9k8FwM3WFxMkdqOPKc0eGwYVsQmo72kFiaz+7Vknhi67p8ptyOrnEy88SjxnFmpsfqa92sOIqojlEH3zkjsrePYAnCVTrJ+ZejmqDXZLEXj8rr2F0t4i2z9ApxfUT4HvIXq+cSDrDqsYn1loprPwjPP7MhPKAwvKCaxtFTyK0iT6+f4rbOZKGhqt8cGMpYbPj0Gk97Sos\\/is0wXV34AzcLSk05\\/lszVCr6E8XsiahJTyVX8dEdXqtSridXJmbufvgyV70qw0HXLb0pk8kZ3kn+jqN9f3\\/b67RqiZVraPXNDjhr34P0Ot9jWJdFFo1hjUeh6+mp9cbgO1MjYiyrOJ5Mp5\\/BOU4QN4fSj6WiamqeLVzQviqfZylyk82WJWd\\/vk8kIS1vPQ5VtioBa4HvQWgpNfhQC4EWdKJC9zKbw02sNRCMdlUTIsk0d+YQOrnWQRP\\/nt\\/jHpXbBKYeFw5uRKEFx2zmg6wkQIAU5tw6v1Aiznn1qBB2wvWsLt96WCicAF1lXMVJQW\\/7gBl9pxF3p\\/hiqTUq9Ud8ZLzWxHRyCcx6PskmijYS0Npqzz5XhBcarFYLjOt5w75tHaTnx790kwTIgzsLGBjPjRcB6B26rcA0HYh45gCWAdBaMUUnTb5aJPe5ml4PlKBAUvSkSxJ\\/Bxqlk9YWFDdMVKaIyRlF0wRAJtxA8MpLpxxGsKd+n8Dma1maLlmBdeMx3DSXJda+9CZxZ47XhW2mlAHPyEe0B2iZV+PKQ\\/Le90O\\/qOdHtDF58krq7CE8R3OkQFbRKxYyzuWVa7lWruzcrrlAvaXrJL\\/GXnU34xEGiA3Ab3qIm9nXBqtuHZwOl6K8YJvwEUYzqUVCgF62+PmwmbSvMHb8HMJzpMJKqCpeBnXWLazvbiNdUv1\\/pdYAjUKRzfx7O5KACfQUfWdmG7KP2VRgbxqZMlnra+DUnnfC44JiefAb1ibRThOjg212XpiCxnq6pUQiLhNG4Es+IjcrnfNR4AFJrF5bHNmmQoZ+3JXw9u7RCZ+TZ2B0t\\/286080FL9njTwTTMWxC8AHM0pSI82hbVJg9UkCzGHc+kK4RVQWk3ZX0Egs9bmcJeMyiGYIkLEYR8Hh+LXVZiQmhCUcI32mFqF\\/K+M3fuKyddcJUuRk\\/YZjVPpuPtgeTeYSqpm0m05zpaCx0FApW6a5KSiGpxxWWkhMcaTCxvCYDte3sdKOXE+z117hCrM9bePJiunzrCzOvHavLAEWyErF7nlbGL2TYRyU9OGfSvg0pbf72DrvRishdIcxPzNcfNj9uW8R2GDCFlQ3EAre6ux8kUDCJhhPT7\\/kMkVW7HKq4tdu6vgc9xqOO9E1Csa4+oZOGLqJaMigi7Cqgn7EQO8XszzRpyreC3SwiSTdgHF\\/dXg4hyigUt5WTWFSR0PxQ4TNYC3Altokyx2UahlP0Hvm3G5qAtAUbecYmcChasIEeSFHIBT6l\\/yt0zyMKIKFVtSPTBWv\\/7wkD3DJEgPZm9RvW6z4HI2tHdpYpMR867nNZiGId1Qjk9ouEkOc3xeq7oNlKvTS1q6Ox1lsVOwQLDJz0rlMg8owHw9u+N5Qrm44shknVFlMzUYCyP8phetE90GF67dKe+1TKwzCcogBKzmLy0Vic1nBLyzoi847ZjBMINBVTfbULnl1ELTK8EJU1tpV0VfGcoUhG5BENzCsN8e4AuTqxzGl+YOY6iDxVqPcnyoCVl0e9GD04q3LVT1pv\\/A74q76fHFPbn6Lxdnut3hu1N4Hc+QS9mFB3IWMjSqni6dEJkow7HD0gEmr3K\\/FoehnO\\/zBTAUYKS\\/Lkk1qKuXhDhj9TiLkVY25VFMt8HCQ+zgq7bAH\\/iHHyPJtRnU\\/HdhH8IeZ5W3rABkzzpVAAzasaYwUzjwahKJ2RuTdpV6eIIbddRygcGGPcYyCmYvQe3KTJ49iR44+TxtooDKBExycqQl3dYCI8WmMpfCImG1Q+qStA+pG+ljzqNHefLdvNu3wMu99TLc76WNiqk9nmbEVgNDfBsobQl4veK43M9SBMYz4zOhfkOdcuZ8lPfcVhnnSWzKExQ0pWymz1TzXz\\/rVy8F61f\\/YfbCVy7pnJ2bx6wzgN4VhM2dAAwvd1Qkrkshky5IBs98IQLI3xlm9iLbd5VGsXfjdUpFghjMvGeWnWrvmXtS\\/YoDXT5lQi5jupsNGUSFa\\/eo4jw3JeggPy4enDbjQQxh71GO2orqGqEwTgsuuSBPeWORbsaMJ\\/6STVuYaMC4H4Z29HaY4dIKeDsOKeiUmj9a0jf9SbiySzskLajToYNpASJ1\\/lYdQnfkBy1upmdg+VqYirxMPl6Bj86tFqe3xSzx2Le8Rs25WA2H423k9Cz+twh7ZWM2HmoIn54xP9xUp8wmN7NPZG0JYAcS1YHIU12CeKCoZxU7+E0OdOpmwwRscu2M\\/Ch\\/P4ZJSgQivewp8DGmp3N8KvV1IVzp3dElytJqRprH21dNEjedaE2vQFr9ya37gSHLhpRApT8ESkgw9lCNXfVRaqYbZO4VobP3IxPa7hEPgW2vvgDwjdSjbkODojD1zns0iy3mIBAdJyi2gujJl9NgP0f5aEeYn\\/pMFOguKnGMsqfuiLt7TUkK7ZvmZ7YiiH4vR\\/UiUggRf46fLK\\/vVyHAdAMOorjSzbbQbHCKsHnIfAVni0HpdpzxlUrg54aeRcHJiJJQbmkCbeNOMaA6icfT6iq8pxGIYDKmDg5sBVYmJD+wtmarVREsKvoIhAFvt4H+TXddRxZAhBclmCeF0aw==\",\"cypher\":2}";
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
         const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.3&ustatus=1&umidtoken=HipLZy9LOj7G6DV8St6BPczT53GRCdbm&net_env=wifi&placeid=111111&user_id=2062435438&sn=EB557BF550DDDB0F42451F5641E634E01CDFE75E&msv=10.0.0&brand=Apple&imei=718BABBFD306E93F02574358B53E9AEF98E32121&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYyNDM1NDM4IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzM4NzIxOTcsInVzZXJJZCI6IjIwNjI0MzU0MzgiLCJpYXQiOjE2MzMzNTM3OTcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.oR3y5HAtP0ARxAJjW5AfM8ydTKaHwEI_4KzMdjI7voVHC2iaFYg1tUo8QfPLOJkv7Q3O1v7KHYt5330n9MYMdw&statusBarHeight=20.000000&platform=116&ver=210309&mod=iPhone6splus&wh=1242x2208&utype=vip&utdid=YRjKkqmnuBoDABOa54Af002O&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
         const headers = {
    "Host": "ocean.shuqireader.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie": "isg=BJGR3rOalPsf6Pj2GukvdEuiqpkr_gVwEY6Q1nMm4thLGrtsu05yQb4wuGj8CZ2o; cna=fjPcGXV0LlACAdoaNxHiMLTA",
    "Connection": "keep-alive",
    "Accept": "*/*",
    "User-Agent": "shuqifast/1.0.4 (iPhone; iOS 14.3; Scale/3.00)",
    "Accept-Language": "zh-Hans-CN;q=1",
    "Content-Length": "701",
    "Accept-Encoding": "gzip, deflate, br"
};
         const body = "actId=355&miniWua=HHnB_8esd7YssfkimHLp82moLdzQHHarO/Gv4BJcW9JWMm43TZtmxSI6KAWUxCIW591txrkLYgB%2BGtSLZwqshbS1rWKQi/VX3cTTfp2fiSCGUlSkVLkrYQrzWspQpEtWC3ZpwYrxRGQxNznPXtNgSra9xEQ%3D%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1633354118&userId=2062435438&wua=ktgi_B8W9nMhwxnBJN54GG8n8eASh4kLOjSaTfDBVGrXionPmFMMB3vqGqmENIzkqbgdNzHgMvMFGoDUpcoq%2BNPpi5nzyqA31rDcw6ADhhVzhHdmZu1%2Bbl1XqfSTX6V9BOWENmtJ%2Ba2475pZqcmunAI2lhx6zpRInQfJVwiIoZGJil3y5C8ZR4ClmgKqwl7Osx8nUnpq/dWl5X%2BcJkIkii3hFU28PlMJXd1p0WTsYc94BoVmGLYJNHi5RbPoFevdvHEBc%2Bo6ne2b4I5mDM%2BVbgHiDRHXdUarosRcpQGim4qLRWtekDQ1gWE1STxwXZuzLh0CAybKfWaJxvVc7XHHH5Xl9T/TrZ6E4HqHB7JJpLO515yBqOoqCbcOHVK%2BDAXsI3ppi";
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
    "Content-Length": "4753",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "{\"message\":\"2SDc9RZ1cWf4LTgxVhfuXrZXlhG\\/rx+jjLO3v35JSwtovuTiRy+I\\/f26a8suAsJnYA1rg1lDRMgI2fIt9o9OTQHkiQ72eRfp9Sid1HX1e3guee5mi7fFPYupcCt1d5e2GAbPTqXIM4Tewl9Vih9s6W\\/QZlRhzSIftl8hPc\\/wImObh2594BdJ2Qkj0S\\/A66IbxpnEpnoyfEV6mi6owqCId9enY8+ZZgKnxDkjdwaUCyg8RTjbpTfgebx0psNt2R4vYRoA8u1maH2b\\/2719z5HDWz00r5egE68JEQisOfbenpt1OVvHV2PH7Pl0mNvAT1VAtP18RlJN5sINEk1WjiZ1slA9fkQRFYMNIR7Ft\\/JoqMI9UK8wXhBDTWdedBZoA1SbauvYPKKcRL8HFQY714zncFdao03QoPk4hHv111iZkrMo1Z8VzQ3y7SKZCJpSuPTM\\/QjEgU5ol87RVnRBLe+9CJGwMHlgvPgyotcVNbmDGpmHqcsv+UMsFD+yO0KfHcqhjaIfVrpdcxTmm9HzP5jwSowC0PClDvAq\\/\\/3wvOIcOdmYA3uT8c51pqJG7SRsDeitPGGSUf7dtfTPwyY3BuEOJa7IitPnLk9AC7yUkJN3q4Iy304fOSCHenKJi4vw\\/iq2tMuVchTRTG8ojNYfRllTzBNef+yMP9cvb0jRCBBRV2XxO+\\/VZ5Ah9hrscabRRDQf0OfmGrEww4jhNEj5VzeC9u9qbkDzDtIEo3j2n70svV8998WkBMrJnfZk\\/vsIMwn07wFdJLxJGc\\/HM\\/vNKs3ulK3Ge2UgLtiaoOohLdkbDs6vSZLfxo8t4rT28UmbvJ3K4hFkLoUynXbUdffPQThAnTOcgsMKkPYGbwnV9Jf2qSkyet4J958SleiYdRHKXkZMxyrrGt2FjlplM5eAfBv\\/xxd0GdCTa5iHszsR14+ipUEZ+X29JjUteRLY4qrdZQKfaKgFfQsQvEl1dvXjBcdEV9RuTnZPKtHk64JR+gDK4a\\/1C3oRbkjph8bJVcT3jGjBOCoXbt5+8KKjmZswscHu64wAK\\/uPk59LPmEppzjbT\\/qF\\/Gf\\/fRM+zP+IJuI6FkC4Jcq7hkbsYJPgpt41Jxfc5rl5+n3alcb+5P0tleMSHH+kp6vhzWUWq9mWgrbyTQLtUbM42kR7Yk2QkCvbKxQ90cG1BXCrbmehWWdfwXtgfZV\\/b55mm2vrgjRMw6TbemyiGu79NVySqyScT0mUn9QAjJ5wM2TRL2aWTBnEqSjjQf0VCvocXkYgi\\/eqlI9cldnu8h3OcJMiu2y9GoM5+wh71VL9+0X0Md4GCKb\\/2jJOrKMRMoNZUZvk6x6d1MyVvNqB+hwarvOWrXOToR2XyhsC1dOEctL5QPWw\\/iWLS8T4v0c2V3Mdt6i9sM1wkf7EC55rAfDI+IajoNB6tTbY3DD4b7IxqFxtOpu0JoTYwcr8CnTnSqmQ9j7ixqtJddFdjUfpuitTlkIHoT7M2zLTVYUWJ7ewVKHKLRJUkcQHbzSV0\\/P4FO28ew7FLvId4Ufnu2tOubW7xX+gDmCervmXVzjAAqn+WHG+XwwpCNiacH2gykoKhVQOSmbuh5uv4eWmcHeOWd8OajcF0MDBRuEKRtIcapqFusdkpZTs7\\/6V2SBMBXHM0xozSF06GW3GU4hCJqhbAr8TisuU+ZPS4rU7JjK580kGkMRWT2HWNsqL4dlI60AWv\\/9hnsqvQ5sl9735+EHnG+1GiUGDCd1n1g2QfGxFmrN5uCAOSorppXUDB8HxrXoz\\/jU+l3aZ3\\/Vf4ZoOUmtB2oZ\\/YejSiz8f24JY2x0ZqwOANmACfMcx0XzyKRHWBMhmjkLtevBRAt7OfaDECogCSSym6BFGO7xXZXMR+josERUaY9Fd2W06dpFhXtqf6LV60ipvvYEnEYA8Psq0IDBVzurlQLsIhG1kF27B5i0N3X\\/LwLRFf59Ykbo\\/9xSpvMCb2RC3FUbLIXQeLqmQQpS7i1r8UET4Ogogj\\/5C\\/uLQcPOy3IH6ZAG2sVqwqpWo9L\\/xtBrHg+x4XSgBE0R1HkaVPdnZtfVgJosFeZjGeLMGmQdE2jr06KdDFVlY2xToxg8SiVV9kvtFAIpGXnjHAz02Wj9JhwmWqj0yzM7zHvYFH6odMiTP\\/+90MB50nXRrrBrErUgP3Nrq\\/H3YvOCaE8ZE9H\\/BjqroOCGlTwPxV0iAozhpTQcXUJDunEvMrPVlRxNFFymx4fo\\/jJXq9Wwk55qPu+5CiTZ9JTjp6NEXYvaIW8uhlW5Nx1Ia6H4pcYauqOSom7laxyizBzyJFnLYuWneaOH6vEXh+byaq4CUGOSD+CmGmCWOnzEhUcu+NwSqjDiK\\/z4bzUwXdDD9lZ+OYF6J9vaxCSLTn8xDp2bQV+kS4NPGAuXK+52XyEAu9Z8eWiLjwPgIMuJO9iLe6n2maCshYQqdA6XUrxgVKbGCzmM\\/JvR\\/tck\\/iEZNzg+L36mFBDUYRpeqn+CGbmsFXlT+\\/gNWOXzA90UdZ4KwNb4l04thCQvxwwi8l4CRfPS6kWpgpdhkgKfPMd5GigUaRwYsQVIKAsL21eZ\\/kVqfjJNi8pfgrIvvn7ocP1IX15QjmLVki1urpiptTnhGlxb4acR3XToV6T4gJwDkSb\\/qFKZc6Ig\\/52cQ52XvCVYLaYbHHfkeQYB\\/62pipenOfUbH5sjgqkUj2HmpwGVzvEI+GMwK3JCbNRkGbqbMNmO2HwpRlkM0Rl\\/ywuvzxiV+rz6Esbt+4uM3fiq8+KIdlHgan6nAe2POwGLg4LCVpRmMQjjv8zdcmgAQt0Y7PqeDQbFc6Ui8DGoK50RMpF5sUQx+MfmAbd1CE1eyNfRD8vmReZNpUcTP9qtnQ\\/bZGz6FAFcIvdsLX+dscwWUtRlnZtjGRWx5d52Q31riHo10NADE6N1bGMpXnF31BH\\/nEQIlq4dLwmjNASVLtymrIM26NCJzyuuppNs8fYrkt6QSQqyoKaEIgdX5ShSe8Et\\/ZG+HVMRFEOv5uxG3HfPObLJ+M5TLFyK7M2kekpveuRygvCrH+d7N4QSkd3jvM7xjh21dxZ8q6QdHMJrrOa+q\\/SQy8TG6Edioxn8xSkqIFVPKOnzude5CoKfYRQ+SLQUleljCeB8zx5kxKEq+1bJESZ7uL5hLA+zLk\\/FrxfbzWpAkUil6jRXxNcOpq6wpmTrApXXJ8kft3AXByBd5zx\\/SI+MoG27FZODm84UYFAv1qc0nMw3y2emAM2H69ej2nchdtssL8LzEoTmgSGsdZAn71slnznekaFmZsCrBu5tgBqvwPeEUhDfP6vFHFaL4rUmGxf+jpp+SrbB9TqnLjVSWxjGKFwwzqumyA25mZ42m5cfRXjuov0QSPMc7VT4KWMQHyDdf2POo6A9C++sFGbipuECyJ9AjxU+6JLsTnaeKhdDIqoL7wVkJiEPq+W7wBHOwMI33txiVeA80jo2woGd8sZf8Va2+4+XP6q+mR7pla6bx9lhDKRuzxKV52RJkdVVaNl8+17bWro8mdm\\/tAAlkwTjFXmnHss2tjeD5kKKa+lbEc\\/h4iumpLtLUcfwWM3Ui2Bi1U+kQrTloi+63d4lNz0AFL3XuZC3I8u0F1tLgcfy9Dz6w\\/PsyibO\\/G4BIZqFhIGaosjT5n9ur+Tn+irquaNelfIgp7cm6sEgKzNzQiGRNgkiM\\/PB6LwXaOCXwC1opZkspCPWdBBI+vxU5nGx6VqefDgr1XW61b2yIq6TNHJgXgXEmx8AC3XrBIckuV6vwwiJF\\/StmHaoHdd6OC5TypHHS7HqvVrkf2mCCBbSYKSk0D+En9Eatp71MBY4Pxg6u23K2mcn5PC0\\/N95JGTgKuWS7mrbgsuJe2PXf5rxO28ytFUhpiqdH2k\\/v95opoIAYfoAMwtd2ijEuA5cqmoYXFQm8TNl0+OBzpS1\\/YzQ15o0\\/QvpjV+ouCfaHP2iOy\\/j4LC3QQqq1Z1kRlOVSvhL13SWwVdTJDaIS6FT2RJrzAh3Nv7wTptL9416tRy9cMKzd8QsgEZ7C7rkpIJqcQpD9RXt5BzB6jI3dl7gbgbsJelTO6W+GFp38GF+HWyzxz3sGDG4lxvqM7gai9C2tjc20dlciibbWn8JbKFBHfetoN8lb\\/CZ2vR6dyV7EG7hw\\/C14LRbC5cHIg+y\\/BdA7sIgkpVh01GomGwUijqsww\\/MBPuKmonAvAnizLDKLwszVWu+LgJgXUws9Vx6XhpbcgCywuDCa7CdgtcRCa77tznGoPyr3tTtFmi00D+IkWKD+aj6ueNQcm+rk+6Nti\\/rKUbSlS0V8FpMXhZ5WgGecJ\\/6LGqoGFG+MbF4nmigM\\/JdyUhDcvFSNvEDSjciti1uw5VchKML9CNdzcr88lZiH\\/xZ3X6Dep23MnskleZms6K1tuvZrlqKTol79+zoyXrHA0\\/4lgkWF\\/KH3P15uLZSoEMX+WYJS2oVaDrCwUQbAu\\/qQBbGxwOA+R4OthogLPttHfXyioBIQotXS09iOEIRW3JNAdhKNxErQVNc+O3fotijzSMtDKpx3IGoX9Qbj1039y0wSJ0DvQ+OXjUPhLDB2i0Qk6SuoYXlV6qnGcehB4cP+xIjNaekONiHvHt6sDzmAjo\\/njE5bApUwab6yDEjE1Xf1KmCRvG5Q4f3oig==\",\"cypher\":2}";
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
    "Content-Length": "4801",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "{\"message\":\"2d4JuwBgZ0XLSi4FXNxtVrPsv9MEnXFN+H6K4Dabxl38wCrc7qP1vqt7W7Y953lg4z4ecGTPK04DUBc9PcbxHODNLXBHjwStH9w+OaRl1Dlbf+HWAyj96BnoHb35xxUoPH3\\/sw0PZ5mpzSVzjTC\\/t5Gi6He2F+wYYoh9GlKpteJYM9GEVDu0FUAzRG5hlvo7IowzgFoVEADLDuWK99qBIRyWEUz3XvjKf5iTqhNUjTU9qyujnBD6G3fF2r+fqz602UvugKjK6CcHeLwYklQKcRnjLP1e+4AbLUC\\/SPVV20RjPWQNJRWrIiGnQYwueeDLFgAS5rA\\/\\/bxdb\\/7ukhSjQ8HIu4ptyNMAOvJ9hG6dPnwPf42qAUvO2dAhf0vpmzO2hMxC1dZ7V9zIY43vJfHSmT3noMq2pSPMGKuUVwEIFmcqrQk0ubAkp8PEEw8IKEzaM9Ls3Tge5whVsegGul+D8a5r8ZN\\/tA7o1f\\/+8YfTh5bSqVpgTWiAG28JR7YFfpuQ5pjlQVkrUdgltHa\\/uCXIHI\\/sYhwA6DA5WNaBsLT1nTidi4wn2XGaGpmkeCWRNqpZkrOJKIlYGUyksfWr8lVwaDw4BpSU\\/Eyd6\\/6mcEp5bVlSMfyeR2d7Nv6h+Q8CFz5f1+qnJ8ijIn7oFOWGgjim7okVENlo5lA6xI1KYWLaS8MH9YbsIdj7t8KGmM7VKllDXt72WMalvASvtCiSgQPTjjSTAZ16kE3TMY0sUv4dQH9g1N45mWTfdGJDdY0+Qxx39LAUSUbG7a2TJWu7x6dop6MKQb5o8+UyzpMc8UoBRdZUjQaqrE2h3bOnLZXBvP8Iz1UEs7j9C0SKLVtizgFdkaeEilWpp68nLmnxceMEsn0QNP7wa9kLIn1fz4E\\/IR1POFjblXN+jxQPEPDMXGkGg\\/eKdenvoU7dTdAwGL13Y78u4RuKchHmGi7giPGvVYDXtb5skS37Q+3scvKVIfUG2cqsG8E6anK4vOzSQKwZ2HBJVFwc02RGYRu78DvTMHKb2Vr0ovUM4lb5vfEJQAMWi\\/wmKmLCoXwWI2mr8ZQ0TMjxupolQEYm7thfRPTJnsYa311PnC0NxL\\/7eWy\\/7uC9qMRiC\\/HzCN2ibF+mcQh3wR65QviZmo\\/dfPgxbg8AbIv2Wwb1NOuF55\\/SkLHsyKeKP\\/D5L53KRz\\/wEBAdCypkX+7x0K1HERNH8Y5zgQagtgQyGxnngz0Qo3F5bUZosMFwQkUpfhoXJalyvBJIwgYjDTCj\\/j7W2kA9z4zGNAmob\\/Y6svX5kJUIqfkwKTuNSdWPpuZxoloIw0SINHZ0l\\/AVxJ3pH5Ho0V7fn3eKBnuUqu8aQEVrHxG2f3KtUx29qY4tuiGvFuuU8CnmMvzqfXZkwpjZV7tx99TKXkG1dJnEbSKyg9nnKen4bDYueKmmD8crUmMLx6PIeJQkXdMiUOXlEGUcqu2P7v2JVrOoUwoSyjP2h1Yd2ZUBLTbqdt5+FvPy1\\/zQIqopta9zO7TaGSQkyttYEnfSK6TAM3mJZqLqiCSx84nVGhWNcf9TDWGxag4XhQ00H2qi6Db8tDZmJPr3KGIH1NgP+lKDa4AH4vY3cJxEbYGzJxMK5erZYosHD\\/W1QSduxtlbqJ+kUaCGwhqS99QJgF8Dq6QI7S+itSZSrccuWzhYhw+cINkoJqRAUoXEtBIKXDHFN6hEnQuWf\\/\\/UdtGHCE8JmsSe9cZj2Y2lTyb+uV31vdkDtkIbkgEd1+rXLKfrhZLS6wk6W6vNUeUWVRlaaUI+u3WfzaLPes3eJ2vjF7UKVNSF+bd95NFP201\\/LLr7iBqlUVNXpKbxeAnhgkUfSjkvbJO6buZlmhdwciB7RIwUGgA4WcxLIvPCasD4nfocF34iyzYdVXbTuh1hCIzrk4b1MAi17\\/NQ1ix4T4t9yJcyPz9wGqv6KweOQsLhbp5b18+hhcqKk0dVRGzzIne6xcq68J\\/EFPue+7Iskgy5u5E5ZkSjo9pGgCWCo+eFBhfpM0NQ699CSLWZsSh1l6AF4bnhqAlb+s3DwNGl3Ia9ZAG7F2rzAX8ddl6D53qYbMvlqtB0Q\\/ayy5bGqKf6cpNwAVPYTrCzARIXBfsKzXjq2\\/tJlVHyLNLsOWsD0nPPx5DE7PDf1mxS91SUu\\/2czW7BbNfEsSxVgUjqjNFbilEWuz\\/1Z6KHd3fJLZF5X4rJJq3jYsMD7bXFtWwZrxe3sAZoZpPG84boMZYDPUGrD6+R358tO3JW\\/mj7h5KTroN5RaJ8waPsC2mRxwVxCBYYFjLRBpfF0u\\/eNL0l3iYE2occ\\/VIPvAkYENma1\\/htFOcf8GCeRsihDq8dpTknzvLph4lOEDE1JDZ6tZ\\/oqsxVABYP32Jm0RLbBITbCw7SNT9ED4nJeAWH3KuAjc3BbOm3f3b0AuFdBA7Kv8Ju3esxrFVl8LN\\/C95cqFgQN5UXRTksaM1hD8IWURWeyw3aRIi5cwTnfD10B1p8yu3YFJoHKmJ1WIicmoUXyVgI8ZYtzjZ6Nk9yAjnDAZzJyzfyBqAbyQltQ1Jhnrkl5c9W8ngMMyVyYiP\\/7RBYiSL1NbkAtPpPo0CJj4nuuIXdThVycSo1yp1dqa2udkfKBKqqNwI805B7YktLQ+HVJNqTy56xk\\/bVVIpxfLLmH8J65fFeqhwQnsP06FAqJMLOe0HPY3ezbkFsH32ZYhK8UqMAOktd89hqrAOTpOHPq\\/wdEcSV5nBP1+wN4ysYMbSzjAs6tEcrwr\\/qMY3e9nZfcvgNyls2MeNU7UUTtb9Sga2CTrhenzLEtcmQI2aK8CXC+T1mXJxFLUHWmuYv7kgJtyjoFC905d0TSqTmlbXR2DzcP89yaj1wOQIP7MUrJ4h52QkRcVk\\/sjZIdzcW7nWnjuYyfnK5AXnpl3RzfUc3KzOIVFEw\\/i1Eqb\\/g3Q59u6j5FmLFf02cEFCaJrhMEqqFkhJzf5EbyYGskTNEZT7neIIXF8c2DGw1DJWLHFV0Q20C3fj\\/E7kmcscamOHhAdMi1QQ4LlhDNGji2QgtXNP6LkeMotU7qvIKI5nSaxJ+BHnhtK3NvY3pgCsvA474fVWEGYBHT6KnHY\\/i+\\/It949SHTKrwQQopsSY0pOdSZLIKICW\\/kr+sUis9MXABF8ferq982eFA2MvvsP9i3FOmshj+NfQjEK3DuLcMFZj31z72y8Yo6DMQDchPxF1dwdKrO3K0mWm8mduhVxHXSxbl6WHYJH8smTmG1dqpsCll8iyaYlrKBDSPT8Tm6Mh+rVx8CAnmUrfbwOIp089XYUQ9nuk7CL51SR8pUC7Q\\/A7T9MW3rS\\/ekKa\\/z16RwdisKgcNq8oWIAk1WcgQK9faI9w\\/HZGifkOOGhOQGkgSyfKgfrbJJfZaX6B8hb\\/MuPUE5fER1NaXDhW\\/alh7CNlE8751gd\\/iOVQijMP80\\/OXZrMDI+ZW\\/9dMaoP\\/OYtw7h+cvlEMJOMeZ7DYnRxEAv79iC+yAxO166PqgFAXghMWP4WRhJ\\/RmLbnm4c5I1elJpx+0yr+olBZExVPTD+kKvleVjI\\/WibfpKvYAkbIbCc\\/L4xCLfKc0NZWWNUy50VgbghKDqOoMbwQaIcTlwwpsyx1vx0zeE5JnQecawtG\\/W0WVEzPslq0wbb5nCjTBJbhd2XXZDIqtjH4pJYYgliGw9yEzACUpAo3ClJ0bLhoEVpOeYm0K+ru0fsomoU+nlJ3Dh4y+9GIq1IdyagGsxofRMBpYzyghNusbBtt5ruhGJ7vZUq14qS7i6j7kaH5SpcRnxDtr\\/TO4Yn1b+4OnDm0AFRn5wStG+6BnTAjPt1j8BiVZxf5LuJeiEjqx3aQveMqMvS60HWoRbDsS3tO2a6rL9G\\/PgE09YS9nY9pmI8il19NCT7KJ4YvISlIYxoydIOlg3lhM9mikksnZRU4LCILR9+lRDYdf8z26cPsuRRWoLsDKAzUq0AY7stVHgHXNgtYgxWrcUHoAzcjtqdCSnkzf9nzV4LIGBjFWrdRFcefZwCY5rmy\\/2W2uQ\\/9AFhfZFZIjjD5zfW4chAGcx34kBjeoU1WYTEedI5Szexl55sCr2XirxKnwQouv63vFC08YcUewnxV4AEuiwkrnBcHinoVxEeW\\/ryEozJpceok3As84xCS0unC\\/QuVpX2mp3n9\\/4ZrI3DhDudvzE45Eu06Z4Z0oIiw3B0vD+S0YcZoyaQm1CtsFxelLNflG584M5\\/dsEb6nQrBtDOwZYrmjoOZTTtFkRXM+M4nvpV0UuT6IJtT\\/Vbyrc5\\/u5GXBK\\/0Im3RIhGijASatBnbP02Qh31FYIwK+VymF2dpHTaAHbNwb0TJE1pnc3B4KsKtBrOt5PRLSJ5iVRYAPFRU36ke2gPn\\/5p1oU\\/AW6Za6PS2JGvIoRQQ+ct+wFS6INYXT12KTQHuYfiXrWair7\\/mQf4\\/6U5f2whUNSdsVOzp6XU077x667nlwEr2k1Pxtw1BgkpUb5nQumlJq\\/OnmAMnCH9RMlgxUQNuPCLdI2MYKJDOcHmO4ujtJIrgS98Z\\/ep2PBKsRI8tMEUlL4b4u\\/hTYIIIUs61\\/n5zSjrucR38dcW3npVN9RejuLafNCIbvApdoy9E7bbom3vTkke+BCQcc5a8kzIE9weoki4F4zYHpUwn699hUJZkCb1WbxO9L4OoX7VQsF9K3NxANpyypnKvdkN\\/feZgBlUR\",\"cypher\":2}";
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
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.2.10.0) WindVane/8.6.1 Shuqi (iPhone8,2__shuqi__v4.2.10.0) 1242x2208 Winding(WV_27) WK",
    "Referer": "https://render-web.shuqireader.com/render/wx-activity/page/lottery_page_red_package_rain/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.3&utdid=YRPHOvDewScDALPRGBH3kbX0&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2062435438&sn=08F7FE3B83E32D8F65DCECCBE4629C63178A61CF&umidtoken=p%2B5LoHFLOobJlDV8SnMqY99S8QxZTkwk&msv=8.0.0&brand=Apple&imei=59AF196F729EC9BBEE11F988A182A7CE8CB76B9E&skinVersionPrefix=1&appVer=4.2.10.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYyNDM1NDM4IiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzMzg3MDE1OCwidXNlcklkIjoiMjA2MjQzNTQzOCIsImlhdCI6MTYzMzM1MTc1OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.CCqdhlQgo_Ynf69HmtJQRPw7Cxj-NrA6B5_XqfvkLfbDEaumLV9NO7-l6dchx7SHAFnqLywhTcAdP4o1dDZcgg&skinColor=23B383&platform=iOS&ver=201218&mod=iPhone6splus&statusBarHeight=20.000000&skinVersion=1&wh=1242x2208&soft_id=21&utype=vip&skinId=999&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1",
    "Content-Length": "2153",
    "Accept-Language": "zh-cn"
};
         const body = "activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&wua=HIVW_g67JxF7FdWPGGVV4%2Bg1Vg6zdNjUakYlHHEmKMgOLCSKRAl0vIBoVezbku5UF%2FdRCjAwfi4JaNIGv2Vq7elnB%2BBsPShIp7NfWFxhvIb2Ty341dHJBJNFVKpMrUC2T%2FwenJF%2Bf%2FSIdgsESVqt5%2BGKEiPBmnqn20RsxJqMhEn9hdOVjjytIoCMqgt6cc7RAXXASuMq38TwspvwtyhHuTfEctjmWi%2F2Nfci1arYJryw%2BKsN4iHhzdfgeOv5V208H%2FkR7JH9%2BuAkUSiO3wTM6DojJbCeZoQis1JSjz7d9RtBwYXOgBkocdEu%2FbI2SEkkE4rWiDR8sAQdlcJS7uEUdUAFmQ77%2BdgiN3u2yQUvSxtFUMsFKkXvqZqgXOcy9brTRvZg1t2bCCCIWGqbukQX0O1YmdQ%3D%3D&miniWua=HHnB_rCdeytmpF9yWrtvaitEwEG5AesIbi%2FesA02HA23QmKYfBmWnvarHeJzVhqm3QQ1yOW2aDlFU8bJFiKAIWNpuwtwdMKJUd%2BCT4IIoikVzlGZCsNLbNpqch1bw55lYw%2BffH6Oz3HG6I1I9mgi5zZ8vfw%3D%3D&userId=2062435438&umidtoken=p%2B5LoHFLOobJlDV8SnMqY99S8QxZTkwk&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.2.10.0&placeId=111111&timestamp=1633352469&sqSv=1.0&sign=091f21e2ab2fc0de8714f1f4463111b5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.3%26utdid%3DYRPHOvDewScDALPRGBH3kbX0%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2062435438%26sn%3D08F7FE3B83E32D8F65DCECCBE4629C63178A61CF%26umidtoken%3Dp%252B5LoHFLOobJlDV8SnMqY99S8QxZTkwk%26msv%3D8.0.0%26brand%3DApple%26imei%3D59AF196F729EC9BBEE11F988A182A7CE8CB76B9E%26skinVersionPrefix%3D1%26appVer%3D4.2.10.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYyNDM1NDM4IiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzMzg3MDE1OCwidXNlcklkIjoiMjA2MjQzNTQzOCIsImlhdCI6MTYzMzM1MTc1OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.CCqdhlQgo_Ynf69HmtJQRPw7Cxj-NrA6B5_XqfvkLfbDEaumLV9NO7-l6dchx7SHAFnqLywhTcAdP4o1dDZcgg%26skinColor%3D23B383%26platform%3D1%26ver%3D201218%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
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
