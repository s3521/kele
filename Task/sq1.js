

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
    for(let i=0;i<10;i++)
    {
        await vedioreward421();
        await $.wait(1000);
    }
    //await vedioreward();
    //await $.wait(1000);
    for(let i=0;i<10;i++)
    {
        await vediorewarddraw421();
        await $.wait(1000);
    }
    //await vediorewarddraw();
    //await $.wait(1000);
    for(let i=0;i<10;i++)
    {
        await drawreward421();
        await $.wait(1000);
    }
    //await drawreward();
    //await $.wait(1000);
    await read449();
    await $.wait(1000);
    //await share();
    await $.wait(1000);
    await receive();
    await $.wait(1000);
    await jsdailysign();
    await $.wait(1000);
    //await jsvedioreward20();
    await $.wait(1000);
    //await  jsvedioreward10();
    //await $.wait(1000);
    await  jsshucheng();
    await $.wait(1000);
    await jsshare();
    await $.wait(1000);
    await jsread()
    await $.wait(1000);
    for(let i=0;i<10;i++)
    {
        await vedioreward426();
        await $.wait(1000);
    }
    await $.wait(1000);
    //await read426();

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
    "Content-Length": "4762",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "{\"message\":\"2ADlHxCDCHp7ZGInlOATTZqn0xiHF+Tq6AgGmjuZ9lPo\\/fSbQK9w56WQKMetLEd2vNaoEbt4\\/cf+0n3NGf5BBEUOmERyKHpAE\\/mWdI1DCgDE8mKm7CpX5YWxKWRpEpiGtr4bB5WgqaVooezjApi4a1rV8SGUd1xLQ6cUaVyy58PEf5aP8thikgoaR0f02yjJfu+R0vXpuF9fiJhkubLhG9\\/x3hIquNmMhT\\/ZBZvZrwK+kpES48xCugJoFeNjjxiZwvhIKiEX5re7tPSPxGoDFT7DGLV0+r5sP3G18xm+1Kuyly1cMksJJRhK5pNnzqsuqKNvUDNd8HQEAGoQUL8\\/9TLfn\\/xoKz8M6P2NTwKRdFIeEnyynbmQLslOsVJqwFRHnylDY\\/4Ie0hGxDkql5xWj9KqDchMjba6mI1ulrj9M7pviie0NKW4j1ttu\\/ZiEXjckxT7hmowmLji9bElkfPHacEDOTGvcHQUCZB56HzJV7UqCRP8LMcnT0sjGFm8wQbuH1RH1fdkAVFnnLx\\/Oj8qxRHRvuD0KkLV3MNf9fBVkKO\\/ePaFEa4RGhVsn55D3IbG4loFlRAuQ\\/jReBUdn1ZGnj9w571W0w9oy3NJB++56UydX4XFnEz\\/NRRj8DkHElO\\/Ji3YkHBkFZCR3yxkw8sf9LVl27L52wGTSzuDMAJUoyG90GxmUE9prPVthGPXsfLU4WAjgTzBlpcsl64mOQL2cVyVUm\\/e7O2k6IciSM82huDrQYlMFr\\/cLNZdrsMIQfzwwndC822Oj55UpHbKmitU75qH2Uf8XjnoVAXezDd4MSXa0d23GZyJnomqw8CXf8nEAGNuSQY4EkXZfpPGEG64WyPvP3xB15fKo9maTp1Qa4np40X1HtH9RWrOP\\/32XfZdWa4NtcyPfpKay6\\/I2d3bfz4ecTfkJtCt\\/tO38pq8dE1aKwKA+4uT2xXcZPqkZHnSj+7MguuOnKhmlzgp4sCkxU17aJjLYdbD9jV0j0\\/2i6j7C8iPk\\/OIXG3DepTVYZLFcOnffLa\\/9rQrnes9VBu9SC23Z7RBOZYnzbIYp+TWGwYIOTp+aRSVqwpxXthWIXjj041grkXTrBTKuxVqreJO3KQ7SWSYKWtVgeh5HJeR1OkOY5yiQDpIGLqQhwcGXjt1JyzOXIXAKGKfPjrtTJeFW4Bn4\\/XJmk0UrVKbUi1J+mxZT7j1HHR32tyJ79khGksiNuV8SG9u6LnMyWYMlirneILMv8T69gz4WbCKcMhYc8NMaPG3MoTlmQ4+IArL4lFZj1nwMRdSjybdgRL4YSu4TJfhFrX9lOwkMAEHPE9zPloNfBX4dz8SvCNCu7yFR5+0VFQG0Z8TxYTeifTDy6Q5ZR9JfUq9GYyordNo3m4r9ofLURLvaszoDDkxaM2+8CkQJpBNXSPzFecPfkPqL5weNALJl7Mrx78ZBq6TZxxfS9V1bq4Ayjzo0osLUQvriKCynC79f85pd7\\/NNslaCjx3WggtMHdFccRkSvSM0xxY7kZ2R9VwkjCRfgtEvKzYRV22asCFSlkEP\\/JlUDSvMLKBqFuLhMR3DzfJcGJ3w4rKT1dC5l+OFVB7XgdWySej+NZPIGYdTVA6jl3Rk9Sgow0z3QSw2s+Di0qigC5DUWVKLNJBseqIteelDN+QrK3CKajIullGkwKpMI0aAxSGbPKr3qcw0XF7iMuOmJq\\/r2KbMNigugB0RHN\\/448dWaXjMDK7lGUlRNcAAisltlydf6CxMG2Qep14UaVsrkd7MDkn6rb2yoa50ur+0ftncl79M3khPaL\\/wGO31Uce7fLXZFyrMsafBFFd4VkEyQWBNmYQWAcSKPvd8CboPAFHeM+yCyAt8P1QGqjAfvR\\/ppd5mR0CZDj+M5dr\\/gUc4uZd9uI2d2AbddsyF1oEgaa7CfV9k7WgwuqeIVXiwAKfjcgN6+CJ7qQZS9sFxcFLD4rw\\/Ls\\/OQsBpYq1E5aKU99el4PEvBMj5R99UvjGrmwN8NjAZBtyMeSK09wClaQKc+1YFzQGSSt6coYPSxnKLnqNsoZB4\\/7BazblGZfLYkb3gsOemn4IBg5LGoUaqot181KhXy\\/0fpmGejUl9QDRjJJNVXnEo09hh1ZgIg5VxyZeQcJYAWK6umvx0NdGNcaSHQhOc71xFN+tyZKvCHokFmIxliBBq\\/O4SE4lxn10HujBT+pvUciQrmAv+FfvFRgOMjmcWbrWgIXL2+lvkyIHD44leRvnW9NBVRjLkWi2IvmmzcSEAq7tIIdA\\/HvVnpFsXTsi8X00pQ9VyJFJc0pCkuTS3CCe+S9DWVA3Op1qVgNesmOZpDTPf6Ub13E5SOCsKtWe03y4odZ5aguAPOrFFGz+zY0muTf8h5mRKawmopJcf3UrFw1fwWfi0imsCBRUCUGlVQzRoJ6dOEvHCxwfbQF5L8PfW3B9Ue23KnDZckRsofSolRs5wsmJMTdKApDhdqdBpMXIZaHHN7mdhwXdIiqqtPtEDBu3hAz50YCKemWUAbVshk6NNbEYYTZ2Pcwpl5yGlpgI1XngewXZ2hQMAQi2HJgsRSmU6qcefRCI0QFHBkcSpViuD8XaVC0Uao77Zvf7iiSvbfsLAzvKJQ8Y6YNIrx+WgGDbRHmSqLy9AZ6dhYPeIrBrlUBFV5C\\/zV0JJBsRkyh5gBxcaX0hm8sMwzbkwO3hSt1Cw3r1ZNACtoxkcA7bn4GJj\\/JH6cDV7K2rwEf2IrVQMInm+bkSSnaKTntgvbQD1zrfoT\\/QNPMsufpi6cYFQu+4REydwpNcv5RdlXkpo37qEeseUH9BsH2vdIX6kOQwJZSsMj09UjBMjEFjp7JxljoMQroCxecjiAa+L2ffu+Amv0JbCRCHItEgrsxYTIli4Fkd3gfccgadqp\\/IC7wiUCJfuUxqzVOvF63AeP6UToUL5Dz+F91m1vFjhzU214RT4UQnwWjRf73vVThHk5xZTN1g0+4l7PoEoF58sjUSnBWG2WtXaX8HDYGjZQyOd6EelzNpcla07RhRAA\\/zShVz2CfqXsdSwX7OMEkGR+EDaHMN4oJ9Bmhk+5TVxQTXjA8cD0a9mVOuhJcdeVV4T4yMg3P3lSdsSw+VULZ1cgOnje+zNsPLvu1PPyYV25woKyYtcssX3zLv\\/HOnTyvfhzO\\/cDOYojegs\\/n7rSPZA7ZVp9W5679TqFQjwVNLf5SNFQqlBDQDQH5nopJB8fk\\/ko54Hu3DGZVS7tEoggtU382+6mH2LVOLWl7fGPqUikJZekiUFpAH6kNRwOC8nZZBjYWbNVxI1M8Ika9wm35AktZWkys47YLXeghvtZW9SMqxbpPdYIptG8DD+WrU92yUbmU1i9lN0M9FhP04CePpuGlTo459Q4IqxT257BdcO93PXmtvVlk752se1iKw4fz60NIQrSQ1qp7itVsR1mrI+CfhnziZvVGUeuFKmZJ\\/TZ6SkhGgchhQqgIB6UWuMNKJbtFFln+3g+RG5FX5uAUumwp7KI2yj7AQFewxMvBzXtS\\/FYtLgo9VKnIdK5qFX0QEUc\\/vhWXU3fkMBlLiqGkUYzU\\/oCKvUTWE6iXImV1oMmBrgbmHDlvwckwSahuDgIcHBsL2YbpqJBqF\\/u8RkgDu68vz\\/sA\\/BPM5\\/UYsCUwCjczD\\/o9Y0zauK+vY167ZQIQwGG0epcHUz2M4lmsrNQXSgjcD7CBg74r5WJK2QDIQYxJ2FnPF0iosG6UpH8++umgpLSpSLt4fSPRKBmRamrucvLhTt12sAetp+33qOCscRkMqgMjPAG9HKZGW7ZVJHNnVvTrdIxa6bayS8+IcWWhAEn2z2F3ysy76Syv7YX1zdsmCNtud1JASXGaNHBliHgckLWK+LdZI6DqrgtqEyo0op18lYa9aKntcPZSl6thu5A+RklP2QtUhm\\/fyMGwue95Ey9hMLb0TUMvg8CdM7M5pS3eb+GvEB5a6JEDZ6ELK7avZglqFv2ynzXNQVvHvSvKtjEV29VMZMbD3NbLQb\\/2bx1HxJhR1sODZMunqbJcEEyaLP+2HIwUO7cSa\\/BKMlQAn4UXp6UxcdWsIQz4cPYVwgv1cm1DAEK6EEZj4amiZVwIAc7lXLTL4L0n+jqIPqonmepSCZKhmigZK5nDBErnDja7Kk7GbWZkv\\/AUJTY5i8jhTvINh68io047nCB9JdR042ywPx8xGDg0iNcI+iZLTgVIl+Uiyt9uCrfiu+2PngIRLFWpFvikDx7YrHnbcU10ZeTQetiJU+Ab\\/Ku+FKmL0\\/\\/ddQ9Q3Sx9AXKX8GwHM\\/VKGaTKM5MVmRnu6InLqh5U5AUkKOH8wGo4ZD\\/SaLgGw+5Mv1DzWS3ebctjbAjMq5PzFxyYY0GQQRX2E4JoKjmAcXxhpQJeXNSTAKLw19Gqn0CAlM080R8AKWUq9fG63miLInxu9X1etkwHpnpthgrZ6b37Ax2vNeMax9RYtBNPs9\\/e0u90x9EUV25mZMNDD6U9ZV0jfsSuCrE3Cr41SqK7sMC4IbYXdLIv7md5kR8pvP+nCuz2rhWG0xSoId23sdY\\/SjymvAskrEc9QJt2MTIi418t8aDLoexAHgZU8bGhXlul7bajwWZRUb\\/zrHW4kZD+LEgiy3cB0uC1IzrIQeNWoZT\\/jRwwPMsOpaNpCRf8ria6Jtz58wIDcp\\/wgPcnp8EewFSKw=\",\"cypher\":2}";
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
  

  

  function read449() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/actstage/pendant/lottery/action";
         const headers = {
    "Cookie": "XSRF-TOKEN=216ba38f-d6f6-4dd0-89de-3876b4c34718; isg=BElJrNNCTLBRkDDOlRt0CTyUUnGjlj3IuVFogeu_7zFVMmVEM-Y1mnIocBCEcdUA; cna=dLzJGbx44FICAdNaYXRfFRxT",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate, br",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqireader/4.4.9 (iPhone; iOS 14.3; Scale/3.00)",
    "Content-Length": "1284",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "_public=skinId%3D999%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DgpZLRwtLOkzb7TV8As6s8Xg5SPvj3rG/%26user_id%3D2082127980%26sn%3D08F7FE3B83E32D8F65DCECCBE4629C63178A61CF%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26skinVersionPrefix%3D1%26isTeenMode%3D0%26appVer%3D4.4.9.0%26personalized%3D1%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzMjY0NDk5OSwidXNlcklkIjoiMjA4MjEyNzk4MCIsImlhdCI6MTYzMjEyNjU5OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.i5YvZ17cw1wLUG39QaG7ML7-yo6qnkLR7nA4Kxr9PyL6NvwSugHYacMZpv94Hu-Us0SAGPDw6TFJ9yu7e_393w%26skinColor%3D23B383%26platform%3DiOS%26sqiOSUniqDeviceId%3D59AF196F729EC9BBEE11F988A182A7CE8CB76B9E%26mod%3DiPhone6splus%26ver%3D210811%26skinVersion%3D1%26skinActiveColor%3D0F9970%26statusBarHeight%3D20.000000%26wh%3D1242x2208%26soft_id%3D21%26utdid%3DYRPHOvDewScDALPRGBH3kbX0%26utype%3Dvip%26sdk%3D14.3&actId=55&isTeenMode=0&key=sq_app_gateway&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=10C89F864B1CBC912245365D95E5421E&sqSv=1.0&timestamp=1632126688&userId=2082127980";
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
  



function share() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
         const headers = {
    'Origin' : `https://render-web.shuqireader.com`,
    'Accept-Encoding' : `gzip, deflate, br`,
    'Connection' : `keep-alive`,
    'Content-Type' : `application/x-www-form-urlencoded`,
    'Accept' : `application/json, text/plain, */*`,
    'Host' : `ocean.shuqireader.com`,
    'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/18A393 AliApp(shuqi/4.2.6.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.2.6.0) 1242x2688 Winding(WV_3) WK`,
    'Referer' : `https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page/?serviceWorkerOn=1&hideNavBar=1&from=ShuqiTab&upf=20363&sdk=14.0.1&utdid=YFHvkSdla5UDAO0ygGI6DM3%2F&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2111665808&sn=C1F3B9E12724162869F18F9CCB7E4CE361047973&umidtoken=YFHvkSdla5UDAO0ygGI6DM3%2F&msv=8.0.0&brand=Apple&imei=07CBD4AFEF888A4F58D65BD337D482ECE9566F5D&skinVersionPrefix=1&appVer=4.2.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=201102&mod=iPhoneXMAX&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=FA83D0D2-0895-482A-8B1B-48011F454733`,
    'Accept-Language' : `zh-cn`
};
         const body = "actTaskId=262&wua=HIVW_nhDmwAjiBMYZ0OYYgT8oWPsc0EjHjYH7nbiqOEhAt0wqo8mPSwUBJ2L8Ob0nK14qPcAg%2BDbDD52Mx0mUD6mhbNm7L7E%2FLYga7Y13n4uFIRC3EnOW9y%2FFWIOzZ4RXQimP05iJpBN8EUQIuk%2BW%2FpHkQuNZsVWMnlqafAkvUJ0dny1%2B1LZaXRCWiWZb9yo4kx%2B%2Bd8DF6MzykZV859KBGuWs2kFoM3TavdYE8V5BNNFss2Dn7hzHMyC%2FIZrE7esuRXIJdGtQggNaTE4iDth2GDhTiF3IWFRlOknilAP7Mmm51O7grdQMYjh4XIW1pSQ3aSTt47It4XdxnpNCUiDYGTEh5CJL8G%2Bfbdg9Uo4BGugARKBzjNOR1rWmj8aVg9TuQvk4QVNn7bOAeOgWiyzV4sd%2Bqw%3D%3D&ua=140%23bWfdxv82zzWoVQo2aQdMM4CXc73bNvZhunAzzP6r3yZ%2FWifrgg%2F%2FL9pekiI3xQ0mkPqb1dyDCt35HuFJOO412LfD1Mo5lKBwGlsh9NDH4YwEWPWX2ebUMYznhAl6ug%2FrVGcNrZR6yfQoEOfy2S8FMgrz9tzzYHGWrfoM0v2UWdMybrBNbMhjzSxr5eo%2B4Twx5LSBTjbzM5uFp0TxS4L4Q9%2FrZqhpMAaLpjVOKHWyLweQ88NHB%2FW7rozr03L74EusUVFQNWIUnANyNdgO%2BDNIPAOQvpWfBEGWHU7zmLer5fI%2B8CG8zoLJey1t6n2BpsWr%2BMkZif00sLrLeQ%2FAYVAIWT49%2BccXgYVBnEpSF3Tx4NJqlbzxgiEbxJCMzzr132NVl3MzzPzbVXlqlbrxaZHUp6gqzHOb2XjcmDU%2Bxxn%2BL%2BJBUbrz2Do6g3TAzjOb2wEfYNsxbIonVwBBUbDHXLD%2BVwGSzFdgjOMMltQzBquiVzmulFr0EDzM36hqISzG22Q1ZMfxzAh4VfVulFzvBDdCwth%2FzzzbkX8%2BoSUHzDcWSLnqEVFz5Pc%2BVoun1uI0MI2y7yDY5anrHRqjELrEilhuyqGSQsUVx2dI2W2HEdcy02%2BnsRo54fzaw00abUhC945NoYOVNM4m%2BijOD%2FJKu3k8xyX6PEu4E5V8mf8YRpIXmFcUzKp8ZPn7aH0%2FSRVCggoQmPvsQz%2B0uweEzOUJh69yfCq3Dsbenc2ZHYrWPkKTuSztdHmerhopd9lQcp6YgR8KewsH670%2FN1cKcvM1SHSn9XP2yqTd7NRZTYYOX0ysnRIkKZszKIgWT1rUYPJa21n3ZyUO60fXOf%2FfZxoR%2F60D0Bz88WJJQdIsTdC%2BamYJBfJlQ2HQrtQMl9t6UvA8tK5LevOUW6%2Fme7rWYXVYTO1khYBoLKspWMCpEncHZlcNSRhkDO8iMSEMfTwGp%2BulzAW%2FKhfwqP%2B2RpsQQcb2eYqeOeHBt0%2BGFnUeFpg292L6hK7NNN8Mtw0gCck0MPzcXEz1qjOfZqvcKiNqSXVDMjZf9rOPwyPwMLWL3pwRJGDS8qXuW%2F%2Fgq8JDUD2aqWV3yRsficMxnWiiqF20A6szlxPACcDaevW1uU2Fe4Sh50%2FXo9YkHPYNAP7DICyoC1HoWpgGstqTSfuznf6g7xyQdk9CSlr8Xk35O2hNmqOOM1Jnaki%2BLsLICfiAxK4IhNCvw9qs%2FMWGY7K6hwAyMFokejiijaAXBvNuhS%2BUnbIyd%2BLlBJrxVM36wJSNFuZ2u2wxV9V9XeOLbn19LuDj2IL9jDXy77IyUc4vA9aeWHZJVHtfsM%2F%2FLeZ4axz6UwLYufWyPjzoJXey9gAStEkjRg0heWdoBuB6mub%2FRk9Bq6ACXNSt1URp0%2F%2FrgSlXGAElw9uqfWZXZ1RJYQ6kXD%2B%2B%2BMVbH8eyEXde4golq8AYYRi9alBnRwjNyf4mpcT532ur2e7fIE8MxmCBpV%2FOH4QQSsLDrba719Rg3wXxlqoN3s8LkFWzOeN4WBElilSXiGmn1jt3nhmjX87l5i%2BB0oSkte%2Bh0%2BXFcTf874nS6XAvtBET5AF72uFKTlroq6vbsF1y7cyeiDDWlrj%2FI2scs7ZiRzXJBjGR5QfaJM2VAZHv6i5NuNgQ2Czx4B1fUWCFYh%2Bt25WZBP4FyADaSwYd%2Ff6w9JmwkEB4i2q4PVPXaozs8eJ5PTHkytQYGz8xwjL73%2B8%2BUgPtjOJvN1CA&miniWua=HHnB_AjujGhREhOAZ%2F9SX0ugaIuSD4NTEu04LHv1hiESuVowPjuAl7yDdAYhHNgdmNfQ%2BuyT70MQT1q2DyPyqLdDUbgubPFToRdhNCPyELEh%2FNSpX8kadBsAXpiqmdCxB7G2E&userId=2111665808&umidtoken=YFHvkSdla5UDAO0ygGI6DM3%2F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.2.6.0&placeId=111111&timestamp=1631693663&sqSv=1.0&sign=3fe873d479d52ee27616d898dc9e8658&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26hideNavBar%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.0.1%26utdid%3DYFHvkSdla5UDAO0ygGI6DM3%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2111665808%26sn%3DC1F3B9E12724162869F18F9CCB7E4CE361047973%26umidtoken%3DYFHvkSdla5UDAO0ygGI6DM3%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D07CBD4AFEF888A4F58D65BD337D482ECE9566F5D%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D201102%26mod%3DiPhoneXMAX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFA83D0D2-0895-482A-8B1B-48011F454733";
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
         const url = "http://activity-center-web.shuqireader.com/v1/activity/pendant/lottery?sdk=14.3&ustatus=1&umidtoken=xTVLdlNLOtKbuDV8AF48TCzFRaayuU2y&net_env=wifi&placeid=111111&user_id=2082127980&sn=EB557BF550DDDB0F42451F5641E634E01CDFE75E&msv=10.0.0&brand=Apple&imei=718BABBFD306E93F02574358B53E9AEF98E32121&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzI2NDI4MjksInVzZXJJZCI6IjIwODIxMjc5ODAiLCJpYXQiOjE2MzIxMjQ0MjksIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.tRYd47D2JxEmxobanEN-uEXuz8nBqII6vjTgV_OnEaIP1A_UjB5jtRsbi4aUsHWlKXBAmDpsTSBnjElGUddG7Q&statusBarHeight=20.000000&platform=116&ver=210309&mod=iPhone6splus&wh=1242x2208&utype=vip&utdid=YRjKkqmnuBoDABOa54Af002O&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
         const headers = {
    "Host": "activity-center-web.shuqireader.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie": "cna=MefJGQfI5FgCAdoaN1Sn4neE",
    "Connection": "keep-alive",
    "Accept": "*/*",
    "User-Agent": "shuqifast/1.0.4 (iPhone; iOS 14.3; Scale/3.00)",
    "Accept-Language": "zh-Hans-CN;q=1",
    "Content-Length": "699",
    "Accept-Encoding": "gzip, deflate"
};
         const body = "actId=355&miniWua=HHnB_hKtBDMkYi7hV1AXM70mvChmmAYltKPBHhkE9waT8/S9stflCvv1DrSJgVsJyCO5wH983WLfGxclNbfqzG9/VaUinWjRwkayv2nDw8mVhpGf18lRcQn0YqFDjq3G%2BG5p2Nd9lNh/bu58oSXQt46ScUg%3D%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1632124572&userId=2082127980&wua=ktgi_BWH5pI/X/zsS%2B3PxwkfK3P6zyLKDiKapUAU%2B9D3h75OUm5uFEGGbDOcKY/hVpfM668WvhkPCtTaLOYqJQhnzOtH7knxtQ1Bwx0SGnDMUOZ2wGHpe9%2BDB4iYhkB%2BMPxpd50Tf0Uh9/qTS8cucDZlhj5e6vzdJeVoVJPpdejgoAnyrHA5ZHqNaBkGbpCR9Q/nD1j6UI4rLoslSXQVcSD7cJGILd/coO0SGLDAmWEhrZ/MLXxeMWlMhma%2BOZknZ20d6VnBGdFXclpsei6C3SCtItYs/tCjmcA5Vg08kU%2BS31olRDlLnLn5sp7SZAsCEaNHux8mEyDXVXBcFq/YtPzDr3bzuc6irwiFOnz8nc0ebWMqJnCdkdDf7tcytgSb5WxH/";
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
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
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
           'Origin' : `https://render-web.shuqireader.com`,
           'Accept-Encoding' : `gzip, deflate, br`,
           'Connection' : `keep-alive`,
           'Content-Type' : `application/x-www-form-urlencoded`,
           'Accept' : `application/json, text/plain, */*`,
           'Host' : `ocean.shuqireader.com`,
           'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.4.0) WindVane/8.6.1 Shuqi-Lite (iPhone8,2__shuqi__v1.0.4.0) 1242x2208 Winding(WV_2) WK`,
           'Referer' : `https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.3&ustatus=1&umidtoken=YRjKkqmnuBoDABOa54Af002O&net_env=wifi&placeid=111111&user_id=2111665808&sn=EB557BF550DDDB0F42451F5641E634E01CDFE75E&msv=10.0.0&brand=Apple&imei=718BABBFD306E93F02574358B53E9AEF98E32121&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTExNjY1ODA4IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzIxMTI2OTEsInVzZXJJZCI6IjIxMTE2NjU4MDgiLCJpYXQiOjE2MzE1OTQyOTEsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Ubxapu_jKHuh3oo0cHUGi9hzDxiTR3oHA5f_twxFDpbn-m53EwXu3M2YWcGkE2dxggBH-2XdGIAX-3I3wO1xVA&statusBarHeight=20.000000&platform=116&ver=210309&mod=iPhone6splus&wh=1242x2208&utype=vip&utdid=YRjKkqmnuBoDABOa54Af002O&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1`,
           'Accept-Language' : `zh-cn`
        };
        const body = "actTaskId=327&wua=ktgi_xoO%2F68QDmd6Mq7uiEtYCz59R%2BoumvDOybAfUq80Kp%2BPhtj0nl2AZT5Jpaiip4A2EhCwsQ1mv%2FGCMaPzYouLYRf0kV%2FBflaLHxregXT66%2FriCIWG8JuWkp%2F%2BInbXDFeIX1P4jKsp7h%2FbYLYl5gjmvzIEEfTOJwlgec9jAKCPuWReTxc4eSBQ6OmHyYTx3lNFgGQ5kNiehdW3Rv4FBuaeb7EXTrN4RPMcKR8OKMoL7739FsB3B83tTCgEXkeS5yk55ZVTi%2FNdshbVwzDqnJusnLvXpkWMyGYORmIfc5It4TAd3hqHpAgeOgechVtvRo95o7q9It8Q3qASIhkRHft0BAyzRU43eR6lWO51HJnQTCJ%2FJSjFMoqf9H0v4Lv8cyOb1&ua=&miniWua=HHnB_CCNWRV3wCE%2FpE7qIj7yWGqafkNzVLq7k7I%2BuWBZWZoVrhslaTwwzAORTpVtrN9UPqg6irBhu8%2BYQtJBR6gn7W23mHgql%2FE0w837rVtpA1080rKCVk9ejsCchvE9SNtWw&userId=2111665808&umidtoken=YRjKkqmnuBoDABOa54Af002O&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.4.0&placeId=111111&timestamp=1631594456&sqSv=1.0&sign=61bdb3f856790e8ac59e5f5e411cba55&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.3%26ustatus%3D1%26umidtoken%3DYRjKkqmnuBoDABOa54Af002O%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2111665808%26sn%3DEB557BF550DDDB0F42451F5641E634E01CDFE75E%26msv%3D10.0.0%26brand%3DApple%26imei%3D718BABBFD306E93F02574358B53E9AEF98E32121%26appVer%3D1.0.4.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTExNjY1ODA4IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzIxMTI2OTEsInVzZXJJZCI6IjIxMTE2NjU4MDgiLCJpYXQiOjE2MzE1OTQyOTEsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Ubxapu_jKHuh3oo0cHUGi9hzDxiTR3oHA5f_twxFDpbn-m53EwXu3M2YWcGkE2dxggBH-2XdGIAX-3I3wO1xVA%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210309%26mod%3DiPhone6splus%26wh%3D1242x2208%26utype%3Dvip%26utdid%3DYRjKkqmnuBoDABOa54Af002O%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
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
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=14.3&ustatus=1&umidtoken=xTVLdlNLOtKbuDV8AF48TCzFRaayuU2y&net_env=wifi&placeid=111111&user_id=2082127980&sn=EB557BF550DDDB0F42451F5641E634E01CDFE75E&msv=10.0.0&brand=Apple&imei=718BABBFD306E93F02574358B53E9AEF98E32121&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzI2NDI4MjksInVzZXJJZCI6IjIwODIxMjc5ODAiLCJpYXQiOjE2MzIxMjQ0MjksIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.tRYd47D2JxEmxobanEN-uEXuz8nBqII6vjTgV_OnEaIP1A_UjB5jtRsbi4aUsHWlKXBAmDpsTSBnjElGUddG7Q&statusBarHeight=20.000000&platform=116&ver=210309&mod=iPhone6splus&wh=1242x2208&utype=vip&utdid=YRjKkqmnuBoDABOa54Af002O&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
         const headers = {
    "Cookie": "isg=BJKSQSiUJ2W5ElsTdWQ8ycy36Vx0o5Y9dluzM1zrocUobztpRDMxT6KN203TBA7V; cna=MefJGQfI5FgCAdoaN1Sn4neE",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate, br",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.4 (iPhone; iOS 14.3; Scale/3.00)",
    "Content-Length": "100",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=2082127980";
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
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
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
          'Cookie' : `isg=BLi41M9kLVsSUkGhEyqXqDJGg2JKIRyrZwO0HfIpC_OuDV33mjCWOcRvwYO9RtSD; cna=Mp/FGZTpP3UCATIHn3xjUi0q`,
          'Accept' : `*/*`,
          'Connection' : `keep-alive`,
          'Content-Type' : `application/x-www-form-urlencoded`,
          'Accept-Encoding' : `gzip, deflate, br`,
          'Host' : `ocean.shuqireader.com`,
          'User-Agent' : `shuqifast/1.0.5 (iPhone; iOS 14.3; Scale/3.00)`,
          'Accept-Language' : `zh-Hans-CN;q=1`
        };
        const body = "_public=idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1%26ustatus%3D1%26net_env%3D4g%26umidtoken%3D/%2BtLBQFLOuocqzV74k19QitQ42IqNbwL%26placeid%3D111111%26user_id%3D2111665808%26sn%3DEB557BF550DDDB0F42451F5641E634E01CDFE75E%26msv%3D10.0.0%26brand%3DApple%26imei%3D718BABBFD306E93F02574358B53E9AEF98E32121%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTExNjY1ODA4IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzIxMTc3MTcsInVzZXJJZCI6IjIxMTE2NjU4MDgiLCJpYXQiOjE2MzE1OTkzMTcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.xXCrucGFA8yuzAzrC_X-BVh9LoQQS0M13rTvidF-pnqdn_BVaq_LQmOrFKjgx_gcZlQCRpYqejOQ_ye4KP3yUg%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone6splus%26wh%3D1242x2208%26utype%3Dvip%26utdid%3DYRjKkqmnuBoDABOa54Af002O%26sdk%3D14.3&deliveryId=980&key=sq_app_ad&miniWua=HHnB_j3lAHupER/p4JEBB7NKgBfO8NL6V2vv7w7XZLNigU0ODLuQRy2OTnYXczgaCvxLkpJhuKB2xzt//Oug1qpCehrVS1ARdiYyvit0cJZGm66MAGC%2BAGiR9Mk851aM1lV2sWHss7tPHVfdyFc/Uz62ypg%3D%3D&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=89448213DBE3BD20433771155CBDCFB0&timestamp=1631599689&userId=2111665808&user_id=2111665808&wua=ktgi_2MkvRp/G%2B7cR593N4nJPYum45XbiWPeHZEqJL3g4mJT7ngNdrTcqtBbMdAFx3STAEm/XpazqvSX/%2BGleiKCjhHm2uGWF2Pw0fGbYH3JYYODlQHQfpGPqTidy/7p8ZlUlAVokgofR3vv5RDMi/YKu%2BnDKHz0KHz/5R61eH6uDEc2R0%2BA4TywGkhqYoJD19BQ8ysjQJP3PYY3XHFxWm6Iy5uGUXzs5NFv9fqljRGgd7xr9JOpXoI5NZBFuxEG3tzuEl0JpL7B2vvuUTRZgTd2EVNhzSWDJs6gYhBCmJ7g/6ilbG%2B3T%2BzXNJh9gfY0qbA%2Bwmig9P75J/nO8JuIwIAa9NVS8sfno9FjL7vBt2k5kASAnNGB164eGgkxnn18a/bIG0V%2BePxvwOMmyZ4QsAPrF%2Bg%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
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
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.4.0) WindVane/8.6.1 Shuqi-Lite (iPhone8,2__shuqi__v1.0.4.0) 1242x2208 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.3&ustatus=1&umidtoken=xTVLdlNLOtKbuDV8AF48TCzFRaayuU2y&net_env=wifi&placeid=111111&user_id=2082127980&sn=EB557BF550DDDB0F42451F5641E634E01CDFE75E&msv=10.0.0&brand=Apple&imei=718BABBFD306E93F02574358B53E9AEF98E32121&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzI2NDI4MjksInVzZXJJZCI6IjIwODIxMjc5ODAiLCJpYXQiOjE2MzIxMjQ0MjksIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.tRYd47D2JxEmxobanEN-uEXuz8nBqII6vjTgV_OnEaIP1A_UjB5jtRsbi4aUsHWlKXBAmDpsTSBnjElGUddG7Q&statusBarHeight=20.000000&platform=116&ver=210309&mod=iPhone6splus&wh=1242x2208&utype=vip&utdid=YRjKkqmnuBoDABOa54Af002O&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1",
    "Content-Length": "1889",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1632125184&position=601&signInType=1&wua=ktgi_l1vyJvBGmK2JRuNOtvPihJqmeamJYR%2BHjtV16qlLsqJCVz8LuXDkV86UMoBIpEyk%2BUi%2Ff5JKJbmphY9jG6ZLwtyzD8qqEq9giAJ2X2gON3Eh%2FaIGpiiVibdhdSpZGOxLbShPiLCjbrM9FC5msPksR0eMNc3LvaRBKYMrGVKlwOCnC%2BUIaWiUg%2BJ97M2%2BmqZzpQCKgmEiyQahwf7WZshYNvlv5cTHqIT9u95UsX9UVXzST7fXbUMGkNfs4HyRzyXd14RSHH5Lj6pa%2FfEDpu1%2B%2B3LGwjMJXaifRsYEJq%2FK9IBk3cYUnaKPiFZNUNwssemdtJzgLhatCtF6OKfNIXMJbBEfbBRDyLOdug5w6fpTwxh%2FWEv9uwprt%2FyU2MLwj9WJ&ua=&miniWua=HHnB_TlgQiPqXSIEguc83%2F7Peb01%2FVZa0s%2FM9EyWomQQNXqFm0YXikmQJawuqinHB49N6AbOoQWj9Q1Urt0vUn48BkwOyd8R6gnWKofFoK0XwdhtUK1i9Skwf%2B%2F7QH9x4JpMdEbQ5RVPNuq5tmrUIxHm%2BYg%3D%3D&userId=2082127980&umidtoken=xTVLdlNLOtKbuDV8AF48TCzFRaayuU2y&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.4.0&placeId=111111&timestamp=1632125184&sqSv=1.0&sign=47d16fce96f4ca6562942edcf99b4d34&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.3%26ustatus%3D1%26umidtoken%3DxTVLdlNLOtKbuDV8AF48TCzFRaayuU2y%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2082127980%26sn%3DEB557BF550DDDB0F42451F5641E634E01CDFE75E%26msv%3D10.0.0%26brand%3DApple%26imei%3D718BABBFD306E93F02574358B53E9AEF98E32121%26appVer%3D1.0.4.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzI2NDI4MjksInVzZXJJZCI6IjIwODIxMjc5ODAiLCJpYXQiOjE2MzIxMjQ0MjksIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.tRYd47D2JxEmxobanEN-uEXuz8nBqII6vjTgV_OnEaIP1A_UjB5jtRsbi4aUsHWlKXBAmDpsTSBnjElGUddG7Q%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210309%26mod%3DiPhone6splus%26wh%3D1242x2208%26utype%3Dvip%26utdid%3DYRjKkqmnuBoDABOa54Af002O%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
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
         const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.2.10.0) WindVane/8.6.1 Shuqi (iPhone8,2__shuqi__v4.2.10.0) 1242x2208 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&sdk=14.3&utdid=YRPHOvDewScDALPRGBH3kbX0&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2082127980&sn=08F7FE3B83E32D8F65DCECCBE4629C63178A61CF&umidtoken=fbFL3yBLOlNz9zV8AXWHk3xq7CocaBpH&msv=8.0.0&brand=Apple&imei=59AF196F729EC9BBEE11F988A182A7CE8CB76B9E&skinVersionPrefix=1&appVer=4.2.10.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzMjY0MjQ2NywidXNlcklkIjoiMjA4MjEyNzk4MCIsImlhdCI6MTYzMjEyNDA2Nywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.B2piU6yP7V3BLXvSCmGQSrUpAZsgCbW1xBpZmKVSUObtrOz8Hj1t0XYSN0bZ6PuvGqIGv5zBAQEXShSGR6QBpA&skinColor=23B383&platform=iOS&ver=201218&mod=iPhone6splus&statusBarHeight=20.000000&skinVersion=1&wh=1242x2208&soft_id=21&utype=vip&skinId=999&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1",
    "Content-Length": "2066",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1632124206&position=501&signInType=1&wua=HIVW_WL8y7d0pRqGCXFQSRIcRXJ00OB%2FDCw3ngg1TmRBRevVm6FsB8%2BBte0xBjyNuSDVD5%2FiH1%2BpE0SlQN5TBUMRLqSym1%2BuM3iUxO3V1j8RnW5EcB0rpXNcFN0HGV2fuXSW4CkVMW70a6073AmGoZDFNZGNrZy79hSzEg4zMoqwTeU4kTWKvN57HW%2Bd0cY4Dq8B158AERDtQ30XYKEmZEm%2BVQQRCDExu0t3dIYDYwvi23dzhIMDgTytfPIfOj3SZzHROWnOmvM1QehHv5XuuIsZchCa3GloUD9sGd4Jun%2FQ%2Fi84eq0G3QuxauPgEvytf4TBUTyksFUM5X9ngphd4%2Fc%2BIsJfgWvR%2FQzs%2FCsAqXMMgcn4ChaaOuqj0Mk3snNvuWoVm%2BSnREW%2BDYetNEeXnwO7GEw%3D%3D&ua=&miniWua=HHnB_ULaQfkpUXgDTlUVQbPn4btCj%2FvxRg0Y%2FSW%2Bz9xyIknEOqlS5x6Vkdc5fgB8dpS%2FkWkAK52rGp0QRdemuAgQEWVaAG%2B%2FWVieFKa3KrSHNXvHz5C5vR9BwwCiFJXpnT3v%2B5AMWQLhbLX4tS4MTCM7a2Q%3D%3D&userId=2082127980&umidtoken=fbFL3yBLOlNz9zV8AXWHk3xq7CocaBpH&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.2.10.0&placeId=111111&timestamp=1632124206&sqSv=1.0&sign=c714e275cbac23b542ed8cc5322f0c96&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.3%26utdid%3DYRPHOvDewScDALPRGBH3kbX0%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2082127980%26sn%3D08F7FE3B83E32D8F65DCECCBE4629C63178A61CF%26umidtoken%3DfbFL3yBLOlNz9zV8AXWHk3xq7CocaBpH%26msv%3D8.0.0%26brand%3DApple%26imei%3D59AF196F729EC9BBEE11F988A182A7CE8CB76B9E%26skinVersionPrefix%3D1%26appVer%3D4.2.10.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzMjY0MjQ2NywidXNlcklkIjoiMjA4MjEyNzk4MCIsImlhdCI6MTYzMjEyNDA2Nywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.B2piU6yP7V3BLXvSCmGQSrUpAZsgCbW1xBpZmKVSUObtrOz8Hj1t0XYSN0bZ6PuvGqIGv5zBAQEXShSGR6QBpA%26skinColor%3D23B383%26platform%3D1%26ver%3D201218%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
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
    "Host": "api-access.pangolin-sdk-toutiao.com",
    "Content-Type": "application/json",
    "Connection": "keep-alive",
    "Accept": "*/*",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Accept-Language": "zh-Hans-CN;q=1",
    "Content-Length": "4777",
    "Accept-Encoding": "gzip, deflate, br"
};
         const body = "{\"message\":\"269kh2jdrig5vi8Lb89cZtorx3\\/YnLxoVBRwkGHOk8KGhbZBSJWyOD44lbrvpCVIApALHZkin\\/ejIMs16uiYVHnbKaK6vMjBjfJGysiZDQx9qyDjgMM\\/Pmo8DLAczC4c91PR7vufzUhyNKxhN4YxvAZw5QfmAxG\\/Cgz\\/q2Le\\/8KtcTXsqQf8ikUtOaHWybohrerbxi6Y5jcGIrows0BApj1mJgpJqpFNDJ3B1sfOWfOvINf7RhvFLpr9WS7KbNyWvpMGC6\\/8BC8g5e62wwZdSZLbhvWHXWBpdb7KfcAAbqJkYHXD\\/OtjbnlJGrgwxcXMO4k7nxOjly8m1B\\/wd5S5QVmx\\/AhewooKd+d79rg9VjmZY+5Zeyvf\\/n6Yo4wFadn0vCAookMpuEHxcIfGtLXVVcPrcHQjQFJRvlEF\\/W7sauxKerQxjn0G\\/ot+cWFFXzAqMvhcSjo57TtLFvosaHfZtwlLIKeu\\/ai1MIdDL0giG0C5U7UhUHOuTOmt57+12MRkGqa9YrSQnQoEzUAoOooHJ9KJk3R7K\\/V+fxYw38v6yvOcYYJxVXXy5YlgXp4bmUzz3W9VKYk3Q4AYlVZJk5Le9Cr23XSgy4a4r9Dt1b4TZVBQ0bYk1UYDSp8GM5Fmo4jHaQb1vme5ra1GfpO6lDEwsUwTtMUa9t1zYdz6b80xEXjkAgm\\/kjv2si+24RyvFZ9fN5vvYgNA691TauPgwPJrfN1jeuElIXWYty7PFkqqRVfZ2sMLrNYMAkXJ2EeowUjaeK7\\/0lFJc6edZo4H5QJ4OTr5OlUo2t5R3QfPKSWVG9ajrObbn0dou\\/qrXYOW\\/PV3Szc1ODLmFZqleNlR+Wm\\/Oog3QyLK+68RbOVfQBfev594g4rWtt00LseTQi3WettFlBJSHzJIHIDb0GMtaaEQE4q5KyzZyPa7EvWo1gkagT5mGpSjyyHS465QZ9vqf4aVRQdvhCFeoX0KdvKA1p7GoUMUdpqk04oRF9iInxX8\\/Mc\\/6qDelkyWP2Qs6yZaSC23wEnsq0hunBM6LnmknZudY+ykrJbGkfVLTdyS3pUUsThlCL\\/OfBUPw18Uvtyei1VV898ax5X9Gr7lQc8hLVa+VbcgTLhWZxa8XxN0EbFBEs9\\/FW2RePs3\\/m+1odaxfmbMS+J6noDZfpQa6nOnHB6Y+A\\/tAwdvKJ0OYfjNtPzeSkarPa8N+KW5tq2PkVk1SPlEIj1ERdjdTNfKTGZ7F4WtOss0o0eObNR5\\/AaSM27hi7k2q4zVOJVTKTpRSmi8+bhKGIydAfoBSO3r4ahVbThdY+lCE5lgS3D6oBR7p0p5MXHE8L12GfLFO55R+PU+VB\\/8zyFP7CiutPT6jmpK2i7PASVTM8D8Zff7HJpTOVh76zaadEv5oh86UilDHrxsdUZkgMrk9ncZwjpdZtatlmwqqj5S5DVwerhMeyohZhiqEg0P8jjnvaVeRdLT4n1pZKZEuPu0fUedej5La81Z7vwCL7HvyvxODnHISi1WXS4nEO1weBCqUe57IFc1NMFYElyQUQ53t\\/0pCaAzoZX3y3lL3X0ebfpIT0YA3Hn7J6eWdZTF7lTI0R2kK1DyBvJhUX5pyohCVHnGL\\/jqBtozPM+hTopSSaGWejRIYdH8KxtqYMzKcQ\\/iLKsk1a3Kw8sY\\/tinpoz40IiY\\/wiN+vsjFtBsozcA88yCzfipucipCzgiiIvGyUA3oRvG9wbQK8GOAfZ0zBqeThAGYixw9nT+zv\\/GctkyYu16u2NExlcGX55HFUeaX2UPfIql9PtsAXmE59VuQxEnCga1dIbRDbYJH2P96fmpMgxFbyqJuNTrtgDRwmQGdtq4XSJXBsYH8l0QxOYlgCuNE7A2TW9ClI8VKEmh5RvOW+OGmwcYwihFfiFM0VSe7CG6ryHeoLxAsUVY8wwLFX\\/pOSmvF4ox9zTXGW6rfPSuGfvN+KSMrbXUK05bYvmq+XSGZP28mzLatSA2AExbmKmJoBzIWlXr+P\\/dCwTux3IJl2jm2HYo51OHvCAiHbbMA93V1gAW+dhzrfcdJtwoK8Hil\\/vW1OOYLz9s1doVajUoSfnz+lKDetwpI99I4Oa5TFcJ2xd\\/NTAFcB\\/wiUs1F1WDH29h8+YON1raXeKmqJYytMpBabyBNvTZ\\/CT\\/TrgbdSwQgTvfLY5xv2WMm1degBBW8cu8dwQYTo59hhJ0Jk0M7GjOfaFDQxmer8P+6RA9REq08wMQGlpPV+th8jB1L65WkSy6sqbhOk\\/8UvOe6sqop7xggNdwYYxBLUZyO6ci8uu6NxoKLZ076uVlyKiEuvACLTVWMcivNpVbuZUOq9\\/KciH\\/dJa2nrpkv2lPMmjD43hkYp9FnFFfrSz2kGmVdhaIgZ24eGhPImY4clYa78qI9+v5JHiKnnvd8b33PWkOQiL7P6amKPTVHcZ+atoRGm9s1ux\\/ISKaHTZW5rah1x7BYE\\/iOqYqZ661LH5sZG79VL2GOJfzZJQv+yqB2KezFjM484ktxON8RDImYWc6JOND\\/hlj91JRM3soAHeujHxZaorRC1TgiI6721tI6N8RKV21utgXDVKpFRXwXMTOQ8glyX5dSiwPUgj\\/sDc9bBq8e9\\/VegtUqVp8tFuMjBiu813qaYfaLmTPfbfjVdyV34nOFW+fnVOzVv1l75zeLMpiA5AlTHUX0ppzT1KzbuqDEyhTyd1GGI+Kp4p3hn15FjahJTHsHoba+hH+PYjoY37pmnhRBbCoCOFspk7DaIX5Of18FK67NispOyzyiA\\/6PVDMIM4VoCwyESlUeebFdKK4PH9FPDj34tXPXOtY9xQH\\/S6gjvABChz5W\\/airlDt+POuamQ2MQ9ZsZa7GYeMXlXhxIbcjVLjD3vYOB3tUfLRvsSMJRXzVPbRku7mkO6lJF7KuhslC\\/6bJ8GIv+hLQ2LTJMXQ\\/ff+7xcutMtmuFlBcroaWDh0dK7r8BeqcvxcDireP2lV5lJswZ5JFoaU32RmSa+1RwEt630RH+9amMluvO6eX8bpwZ9xPMhIzmaO\\/2N7K1eu5Tx3diIrDK7qBhUyS0lX5yaPg9eGOirm+PIuO2Q20q7WH6UL+rIG\\/wflk+kuBQ2n5pkIrPCljGSPygDsDrfs2eVUf1SMua8wzKykidvnkeYoB5X0IpjOM\\/mO2bebvAOH6EediH16mhLcYQb4jvpV4WfHmS+kpv+tY5KOWjPhPWYTYHoaX1un5WYw2\\/iAlIC3pichh5bRdnH4sYMcri3wo\\/SLDrkbt+QdhwaOoy81tDRfzM8bjLzITrWMAg4RYUVWeCscOsAsvPN32a\\/9cjU1f+fjGyPw\\/fHhRbaxYdaSPpfqG02PmqopIAe2Chkf1V4808ocutvBGjZBs+rwvmDojA0I419RHaGpiD0Fk50FU0tS\\/OBS2o9fegn8KXjBurg4HWT98zHL5n7jJCxDJ7gOoe1WbZqjk+cO\\/031oTjRDiYQQoA9R3V4qrW7ZMjriZ\\/tLH\\/PprSpNo2zhiA1F1jF3N5dbsf0Dx7mambORynAIPiOj92WB4GBZgNMwIVchDH+G3gKYiZOU0ko4vG7wvxhHqiVXMJqCKwanWSqEQRzyF4RF2PGaae57W65Iur4L0\\/lWU1KhbzW\\/ELMLQRu1wWfe\\/H5WiwCKbQ\\/W2YyV9GeZTkLkXGF4MJJt2tn3NQXfQulhHFuDTmHHkZUvr2AwajjmU86wYZAP3OLjnL0YQx3xzT3ZjiYqMYsz6KoMlZavhx1GKvGDHgwWlDbc2aGq0A4rICaKwiCxsXckm+JHXVEt7EgKvT0R4wNOUj9ufuWLf6K3F6EDGS\\/sUwqscHZ9PaG36CjVJIGUQZBw7SK8OaOwBHwpTHMwWZxnVQfTmsWoRiK+aW6F99U7HlvQ5JviFZMrLEijfSacxWXpSo816Pd0nOx0i00GAUrvFaFi80uxiLn4E\\/U2cEFJ2zm6jgmLZWJDHFoyDjo5kzrESre6Gedn9yAuiHLQV889YVj9RY8orH6VhfG3vpUdvzaDRPkzLiBD5PDn2wuTBV9u4L4LoHFGk\\/Lm4nxLDsooJ7vYZoxv6qtcDof3LDnP5A\\/tbvzXpjqox+75N9zU1e+H4E5ZI6e1VcnXrYBE7ykg+fPSiYyyrH0orU+W8mJsE4+SsyiUt7MVW+ZeoQMmS16hBQqgM4JuCfVKhjJ6RcIwIBJ\\/jQTDakiFsz\\/WQrB5\\/lVB1KHYh4qXOxEfK5Ctf+pqhah00k\\/T0ZcnhHNsVd7\\/yuygx95XOwtcHMIxlRGj4vspTvNaL85nDe2PhUX3INGMTHtoG8Jw1saRsOJC39NqgzEsn+THHHYRT3Q5WY6f9Lsy4xZBCKvy+lTyo6FntS2+bruuE87A\\/FgyOJtBXq43LNFig3vDUCTfBBQ2K6qxojbLlszdKry9EiU7Eumr32HbhHqHXQ54AsaJnUwleTwW+Uz6OPfvMxHCG77V2g5neD+9OFGhqxulv\\/meJ6JAt59Wf3EEGLuZ7akdXEOo6z673BP3h3d2C+hXPa8LtnhTqjTc2Fc0h4+xSs\\/uBQsDQZZVd2yYDSeKpR9dW4PAlz+t7vm65sglO9+MU8\\/I72hRduYnvrP3eX7d4I4yKbFwFvM5ueSNEakB4j2jtEV8FeXDSCiukFCHvo0+72xYf\\/VPHjbFf+f+QFtp12QpJF3QB2c=\",\"cypher\":2}";
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
    "Content-Length": "4724",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "{\"message\":\"2ORrwdYm1YyLlsOO4SAGvyNNXFR2FiEbPuGX8otfrw4iu848w5CGVWxR5k2DFg3VBAiu4lBUXDsWu\\/d6AB75J+DQyd3FEfLkwMQHMPZZFcuLYrya\\/67Q2Sv7u52yqCfrFUiwFSMgYA0eSzBGNEq6qNOvMbuRPuGHEbKnK+ZVOkTv6ApiEp9A\\/tkbDJF+sgKjFTf1flKNgr0a6QGF6895HFNKyp9S2MxYGIA+EP7NZF4NmEEQrCu2cjINwgNxIn4r8mAPhT2RWL7u4nxu8rsXVLVzosWsEFqe409C0vw81YE6oY2UN72ogLfDKqIhgH5YLjrGFHmP\\/c1wRC2qO8KVwoRoiidowc+F\\/CUPzwhIXe6QSkZ51Bb\\/JI1sl37mi\\/x9S2bGRkhdemfXqjzAiuW4eFRCKEo2nRvgMSLjzaQJDTzv+1gecWolDeyxeHWKVZt4HIvuNCwA9EBmWwLM8RoAC+2Jno9L0QTlQZ+mEa5qZrnqmcaNF7GzQgQ3SKuh\\/FH1rPzsoaV1+V0V7hog415oR7VUETsEKXkJzTDBvBmRRws900\\/crtqx7d9k1nZ5H8tOEL6PV6+RIO1IwjBy7RpM8AxOeIVl0ItJcjaw9JEJHvdwVbwQhBFHkViDc5LcblrU4KVJTqoz7sdR7bk0zV\\/0tUJQWndMUurM\\/6Bs3NwrImHm8rYVyp2kb6lT8fw\\/8fN24m1zzsdeLzwRJQUW+keDi1Z0sbVQ0i2ulyu2zB36m7o98ofHEE5JfV8vnwb0yG+l+4+ytsqUTKQchSk7Xicpl1zzO0tGNQ5msRsF+wIdVErSi\\/B6MRc61NhC7m5osQ11uBEfnWg7C722XGs16wN\\/CLrpiNrUY\\/fGSZDEB4oDpuXsEJ+6vWTsmq\\/i7Ti5+UUxpldMBANs1scYp25stgqKeOztrO4xoStSufVrKEvw+ac8NWKFFYVuS3HDovX+RjiYdS5V1PM4hvehnzCTFkLYwL+kuvqJ0c6gujnxCh1bUx0u\\/mnK0wRUsJEIaFcVXzTqGhjGy0HRuJ43aGiqcsHldIcAG61Nmcua9URN9AF8\\/SIe3gfuGeASnhVblLLRLsU1V98D59TJPXLOFhtfcWJ7IwmrV1CNU\\/ptmEpCG4wZtXDqcVMBUm4ZnsAeUXvjxEScc8i8um3OMp2ddoPqQLeqgVbYmofipYNJSZMEB7CHek1oWGuupjRXeMfTGXGzaM6Wu+CVM\\/pMN2AnMF97whc4dK1udDrYKNKD3h3xruMQ1kaKjPqqr65FJ5ulauVVYhPooSuAUijfsQallOu2SwTiwhteWxp6HA\\/tCuJ6tlKm5c4XrrhIQ9K42xwSXoR+0FAcmjRFlL62w6h4JsTq06g+RzywepinNzYlnKSpltGm4IUV+PwnA5yaOPZy1T2SPzD5eyf5XDjJvxcAwIoy7aD++W1IVcTasWn8qxWkrKgqlLttPD4nwOo\\/PMzsQMkLTmhAXo30j63qusc0pgKyivWgjr8qRWI1scJ53rYMdurJYM+7gTXh7GtNoMCOkbzG1FKTE08QLb9rL7f57+Mkfzfa+Vr6I2uEAJtgu\\/p+8E+YfX0A4dT1AlNxtxRc3LXiv43HjBk1wTVRyhHWQNozi7\\/96xfL4FSkcKPuX\\/KMvtbZH8ljjXXnfSAl1yFba1P14cPoUDz6WwkMi1KyDccy5LbpxDNolAVnED0xsehdtHPFZIsxyyF\\/HBX2uZxT+o7oKXxJkOSos0rCDSl9R\\/8SJX0IfcBT7ZrcKudFOdgY0n4Ll9F6iOGOAcLqbgzra+YkZn07tBd2Tpy8lRXIa0EQHBjIitP\\/ykAKY3pYxNUV7O85nIWPLEOBfwnRCsTy7pXycs8LhLhaYken7zt0qZOY1pIF3ksDVZlaEHG3z5rgAbDJ9z81xXgsgGiYmueBGuh6fVNCNnc4EFEx9mqB8uUUlGnTwqgUs6x+pfsWJtmIjrRPq9W06TMjEkxoVOqVILV4B0WYSRbBo5Whn04IPuYuE+c2sV6x3Z3je1+GJy0lRlzEzFvAXF\\/0VMhS8v+wkFj2Tyo7wDW+yvZ+\\/5nxeRi\\/jBOlMjOhe+UYLC1tK\\/ZjnBwEIrVVkCr6nG0oa\\/nKNYuLBL5aZT2det2Wt12ER16yp9+hnEA81ucsDc9gFfu7qyWzyrsTuOoWlXtqtP10JqzJZeWHZfNDL5ZL7OTY4wzukc15r8ItW4bsH7ugD4LxZYYS8ccNUz7Z37PeKFmeebH4PxQ9IJqFqj5nm4LPZOWbaEyJtTNAUHAxM7HXK73XJ9FB+sYKiTkRPGhaVgwFuJWrbPNpF9xkuz8si4Cueelgvsxoxom+N4Dx72fbqmIFlPGf9TV42nHz4AM8KJTw3snkyD2OPp9aPwm7lF4+P21Q9BEHuQZR5QsqGSz7\\/KWq0G4CU6YnvwqhUSBcuuQXnQ6APU7HRRkqc8iObT\\/8RHOizGD6tBLvJrrBidlQMnu+MKmXLEMvAEVMnZ0Yp2eGE0qhwuOIz0W1+SX1SBrDil6fg7MtbD74u8gALFglTJtke6No8VhWG+RM3LiYeN2EWCST1Vgj7MoSK0bwZ9GjIxu7pXkdmAVNiBXcEkUJqLk50ER3ebHpgSaqLiLc4pm22th3T2GdD+gYoGnFPGyOAyFL0Uwvr9BTNTFPtPN1KoFamWVS8F\\/XdJM1lB+8qMXS2WhBNQTfkn\\/hfE+utRZbmL0j0SzupTjUl2M8WSvVw4ktwZVvFYG9j7AjNNpOZj5cSUawt3mPBVGyr61IAwHQ1bPuf5iUnARFUWrNjnL5LFp\\/niu5U6Oko4UYXcE1fF91xy5i8umH2\\/xSNjbigOc73BZYdqJNZHmBNp1\\/XR1Z5YKHBudm6Att9NyYkA34Qmr49wYkD1LIShoMZ+zcJAuX7xg9EBah1Fk++h4gPHwlvvJ0TH+1lzX+QRJzrTnzY8A8B2HIjoQU47iStUy\\/ctCpUpwLcjSMc2tBeZszlJyj3L6Zdox53RJEdY3N24rfGVu6\\/jtjc+xgUnKIGNm+p\\/7LIF3vBAKA6OQbbF3E5Gpz77JNWnjC4kB6eqa+KjJngsnSweYnfvGAd6CS604Od\\/VHIzvcpZch5p2H14HqGthTiIEK3NdhHPhtHSd4VtjWvTQc2kSugFYLFghjqIs73VXRa\\/IjTWmOcC8O77ikKaTE2+A5TQrcXC5mjH4N8m0XlOedCRzd\\/KNSb7yVRzK92qw1OWjByS0UfqX7icYiFHEX03SMWCFhT4lxxfhMFYD\\/HQzMWfmXlc6BcDp81LlezUH2RvSVYs53\\/UAmpFgcy8nggHQFX3enqVfamec7i5MqnSvw2TMIVa3kyUvFb65le+K5\\/mgG+JpbfC5BukK\\/grETHYaPtvWeCDOZ6UPV2CidOw5GOR1LR2iKlYB9ofNDnCOFhYwxYMpDPNvhpMc4c9InURP+l2Rrc+Pn\\/dTdpVmBRrtvkm21AAORPLqAKf+Cg5Z8SCHlkQQZ3BqQ0jwNQPq8mxbCT9xMmuGDWKHeU3qTXSocz\\/vTpmUklb4TLodkj11TLfMiDXndY3Ov+PuWpOEo+7Y+kM6aPLoZJwUUOx8M8jTlIFGNCLygTd48PTBDOgZDkvuIpMj0JQ\\/kKsqS\\/Ip+FazM+PormBKVHXjF8Loh3h4zeB1RuXYeVgwj9Hk83UsZs2xyMCvJ76TPkO0Fs3D3nlhWTYkS4gqL8PDZeU8+BI\\/TPdr3ccToiQMMKE27VSTSWSh8Icp7fh3Z\\/BoBzPgUzGmXX+wGCcaX4Mkv\\/u+K57p7bbT9Ohk6wo1GKnf5o2joXScpHliLajjIw+xsE0QE+EMXQdfdBCHxhEhHjfqFe753hG8Xo7V\\/9KrmEeDYAUtfhMj0aM8c5xPgO+aHct8snP82zMqRid3Znc4rbD8xBG+LBsiL+dzIKccVH3xafgtX5yWIjbm518zm2FxmNtFeuH796\\/\\/y9KJOTYdD08fnvvPQ2t3hrzRSfCQn++PqSEoQZsbiicOCOneORIaKmgjEF27tZfJfd\\/Erfh\\/hZfr7u+efqmVd4+AEPFNKlq\\/pDZkq0X4Npbv4eJZ81cA+6dOxX\\/rnuFupw5uO761JbOI3TXf\\/oMjr8V0W9QActv\\/8PwB3wY1XlGEtoBiD1MoQhuCXF2CUgooBPcBIc6hsA9FyTDuB3wt7Ydm8NJaJWEcc9I2\\/L054MszxfGDe+PSfYp1iuOKIxlh3dj0EA7pXdIzZWzvXWEprruoDwuriAAX+0ze8Pq+PdM1kp9Kr5Y8Gbp017SvkTWbHpeaxy5ZtOSwCmCVW5yGSpG3ZNsN4j5p7GDKZMKVMRSWplKzcFYIWxdHy29Va5lPhyqKFwverRmp6nbk27LCIPeWmDySy+e+gS\\/\\/bKjnTlpvKTbxHCYZRfkmyjLf8LFzEO\\/6S0+On\\/m9Cuvajrj+2De7oxexSSZp0q5+7VP7fumRdN4oqEXY4TB\\/Ehmn5nvq83dTIw9O0mtd8Ks4L+Xxs0DxhmGusMa6dpk4fr0i934wTobFnAgKAC+N2N8h08kuEN1fqU2MlykbDagfVe2Jwo1c29+bp6uZ+bitWyUBkfGRULVM9EdbR1Bwe3mjLvS3DyiTmmS1kFgU4h4DMwVSus1OtRnVbt\\/pGQAmuUgE\\/V\",\"cypher\":2}";
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
    "Host": "ocean.shuqireader.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Accept": "application/json, text/plain, */*",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.2.10.0) WindVane/8.6.1 Shuqi (iPhone8,2__shuqi__v4.2.10.0) 1242x2208 Winding(WV_5) WK",
    "Referer": "https://render-web.shuqireader.com/render/wx-activity/page/lottery_page_red_package_rain/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.3&utdid=YRPHOvDewScDALPRGBH3kbX0&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2082127980&sn=08F7FE3B83E32D8F65DCECCBE4629C63178A61CF&umidtoken=fbFL3yBLOlNz9zV8AXWHk3xq7CocaBpH&msv=8.0.0&brand=Apple&imei=59AF196F729EC9BBEE11F988A182A7CE8CB76B9E&skinVersionPrefix=1&appVer=4.2.10.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzMjY0MDU2NywidXNlcklkIjoiMjA4MjEyNzk4MCIsImlhdCI6MTYzMjEyMjE2Nywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.dbolRDrPXzc6_FQ6634etk7QrrM405sLnrnZKSd1yNTMSOTOtbqLBpCK9Z-cPdX6Q4gUj9jLcVfIFixZMhCV3g&skinColor=23B383&platform=iOS&ver=201218&mod=iPhone6splus&statusBarHeight=20.000000&skinVersion=1&wh=1242x2208&soft_id=21&utype=vip&skinId=999&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1",
    "Content-Length": "2161",
    "Accept-Language": "zh-cn"
};
         const body = "activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&wua=HIVW_Oy5%2FXg%2BY28%2B5BZDyOM6bO0wnovZoUYae%2B6OFWeqlhgQCXKs5H6wWtBnP%2FsIpPGYyLaIDAaglsVYCLbPRgKtPEKFJMjuFANc3Mr8p8JArCaW%2F1bIJieDTaZXLYO76LDta69dFL7hhf5XiAXI3hktkMBVf8luETOAGMYGi7loQXzQflbHJtAOKBn%2Bpz9fPmJGW4Y840hD8Wdf3ILSXsAQfC5YsZXksQOX%2B%2FS%2FtcC7nwkyx5I5aB0bkInlXtLrI%2BOt3EOOOIb%2BdBXeFMthZ9uEQL7BCZu2oEcXoccj0%2FX%2FxcZkJ29b4wgFIwTIYbBoEJaqx69iUaU7b1upXgmmK2ZFXrUR9qiim5nzD0EdxfJdNJf%2FH6mRLKYELORYMwKeyI5AlKCZpSAebXZSVEPUYXY5IcQ%3D%3D&ua=&miniWua=HHnB_JrZyN2PxyEC5Iaxccwqw%2F5zJttgWNEA6LJ%2FHEkHEcEsjIJXBKdvcuAwT%2BxPMoBMld2rUvFKPeimJ1sMqnbihOKLIacsZRGUZuJU107c%2FoN%2FXPTZKFtBPdSjF0s6q9tWor6%2BGmir8P4S2FCNWWaLhrA%3D%3D&userId=2082127980&umidtoken=fbFL3yBLOlNz9zV8AXWHk3xq7CocaBpH&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.2.10.0&placeId=111111&timestamp=1632122559&sqSv=1.0&sign=8102e9e362f5dd95ed92df8b630c410c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.3%26utdid%3DYRPHOvDewScDALPRGBH3kbX0%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2082127980%26sn%3D08F7FE3B83E32D8F65DCECCBE4629C63178A61CF%26umidtoken%3DfbFL3yBLOlNz9zV8AXWHk3xq7CocaBpH%26msv%3D8.0.0%26brand%3DApple%26imei%3D59AF196F729EC9BBEE11F988A182A7CE8CB76B9E%26skinVersionPrefix%3D1%26appVer%3D4.2.10.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzMjY0MDU2NywidXNlcklkIjoiMjA4MjEyNzk4MCIsImlhdCI6MTYzMjEyMjE2Nywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.dbolRDrPXzc6_FQ6634etk7QrrM405sLnrnZKSd1yNTMSOTOtbqLBpCK9Z-cPdX6Q4gUj9jLcVfIFixZMhCV3g%26skinColor%3D23B383%26platform%3D1%26ver%3D201218%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
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
