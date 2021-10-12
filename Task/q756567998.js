

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
    await dailysign426();
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
    "Content-Length": "4627",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "{\"message\":\"2Nujp6MlSYrCQZL6PdIKK4s9PrXIK+VzHQwhGdJq32qyMjqipJyK7Dc\\/oyOYaU3fUq3rLA5kw4kgG8yx+LE9mJuqrxFhCOYY6\\/n8MAEYyYJuO66oB3w9X5VpCpHMsdXeV3kZQ6osY3xZf1x4r+0lzfdt5LYTHXp+rsqBGRwT+uQIP+JTlTN0eOCXlQqPXHlEpoA8xEbH7wSJ2ZOVbMN9NiI0FFQnflyAMMkJOyR3YnQU7aEdnl3cB31cjmbT29HxSFRptsxXE7ZhOsGN2MIh0sPH+d2UVSkpUeHKdcNTqdTOXnd+ARLtvvsZzV4MyOgst8awjDkyOJlKWrKx58n21JVGyuIauZOEWyl22Boj4lnQaYj1pyqq7iD0OYszd+OY4G7dQNajyuWMH0ANXgrH0pSbslA\\/XJaVq\\/yFj6SEWOrKlcC5Ut6b7ANBNVK6lENTDDUE3WG31nRJbGJthZmJllNpAXbVYBoOJ65B5cEH6tbqMVIBgrHb6Ol9T26icjIzuKR97CMEYnHylj66k8k9dX\\/+rcQWh71WyULZr8THEJ23X3BG41aNzkBL0HpR8Pvy8BQWAMCCwmUnnoy2lHqgMjs8Le2Y\\/ZRcyrQyrsmGUHDS5wAGb1KGe5tZaQsqX2K3PCiTqFq404UvG8KsaZMa95m\\/XpI41NlFQjB7v80UL8eUi5X5iILQpDGowe4Fk4eXUb+hpqFCq9mA3ptAaOsdv+xewC\\/EAQLZEWSXGxaZ++mOQJ4YwS\\/DLXbqRqNdfV+WhZZo37tf3nrNOHRv+lHvebgeWIvjN0fKosygn0n6h8pCLaHMCX2AINoAsJIFZIgb\\/DtwFeYctuaSRv8TPeUKpC5pljjVJjca58zsHYMUMK+hybPPJ48co1EzrDMO1jm06fqTe6PeQG4fM7t\\/pUl60VJ2DuoOESgM2SLiwVgBMBzOmX9tR9THrymJ1xIqQlxUiPI4ZgFE2eiGf6G8t0VRLqioFzAOidtU4xzqJDZp5zdaGtsagJPLVngd4Ldbn0I+\\/DRbwDrTb7kwOPVmgQAON6Mt\\/XUVTCAGKmx219dac9Zk46tA6FCEQFJPrgiR60Zt\\/dSAdnidrHLjZv7xUz13VEWnLQtLAPiuxEBKzeMLLJ9wEVnQlNCW33wdLsGfvtys9+uIjOqfdQUaCJa2O6sDgOuOD9dzbmkFpCCgDjOtVJemHCEmm9LuYfrHcekZ3+8VxFXMYO2lWmnhDDLR1ETxJa6YcjJM+skAprpLPl5b\\/PXidPnUPjLdwBcSVp9iJu96rkvd+4rYpIZJbD9NDC9HjAH7Iu\\/dSKGqqDrE9jEd29S+KjYLWdybALoLq4Xl66sjobYuhtha1keSbUh5IFmETlJJO7yiEYZr96Z\\/kcI7sqS869bgG25SOSUy3yxqA91U9CR1AEPE42kOqav0e28wUQO3yB4onJz9iOwEK3HGrFvsk8eskw+moxasYM5HMogvoz0VHQtt65\\/7gD\\/hB4NgNjkn0N2sFnhTy2cHldaBKWYSIK9o1ougP5EvmoHRL0ABb\\/KT\\/juDF9pbD1U4Oub6Aq1AK13pafkpDTxejxUit5c6nd5Twlwe7Y13Pcgsb7DoftT9nJd+TJnC0zAgTNjySLXtH9DZGo\\/2SmWfujl7F5sD60R4gHckyWV8DQrOvUNooKPRZgrhn9UqOmjgjplOSQY9Y8j98rKJoi6PhfM277AQlQIUH\\/AuPeoHuVbNEQdUNW\\/AFau8LL4yCEH7xXl9P3YpzHEi32Eodyx5E0Moqve+5tiL3yzC5rhgGGCewMEq0GE6KweG68TcfQYuuMKdCdsxa1OETPadSf8X+yN9Prv7BjirUt\\/jsNtzWITcXqXmnINZ\\/+2mdsZhhC655NzwoOQTfwoqPh+YTAJXjuDX9KuZsftWDpz7PuJh6cQywclTo8xjKXziZEUZYizC+VMjjTWD81uG8mxOjVP0FLuXlRmhwc9yzwhPpTknJWujN7kksrZpnUQkTgSOQTPYbMDn3keaVluHw9JR5wI3kcmKnTFaN8vZqHstUPu3ytOr5mnzPo2Bu8ZJ4eHlUy1oUAmqPyzf5QhVSpJqCIj7m39UdsyK+uC79yR2YR3gMayWMkHfLrYV+6YYk7hdrhyscf4k+i3\\/ut48JSrGExFqEFGv03XkK3dKbIotq+oVM8DbFUSKLniIn41PkbFutRgE6bPuBeWjNjeNksoxlVd\\/Xhr05hidYYNGHRfHqHKGKyPUOTI0WuJE+es9zOH5Rt4SG8YRwAPkUwdvK183DYRYXEO8IR9QkItmHX\\/vSr6NXNayz1b7oIaZ9sY6U6TH65bxocxNfmQQ\\/neYdSyTbPy2kTLJr82QOXuCUjVIdDNF30z4enPvsD1n6QuPcmlW8aQguH4PsQOYf9c1LuNYmeH6ssdpDrvspxdUpA2KePHlyeem2I6GM6i+kCtA+NH8d6zrQCwMvCKLRdWILXJBJ+9D5VwIQg0\\/6fBs4lq8+rI9iWRZ\\/ulWgt7Fcn+4lMXeWzCXbx+iMSmGbgeIDrtZ5SwGkYelwDR4LDTDAp\\/K4mWNwZpCBlb1ESSeoWiyw\\/wRBLsewITxlDElVfeyo7VxxAttGtqUB6xBK0tPtLfxAcf3u5RAFqE+bkIKrLiX5SLKs\\/5o83DvgEBlcbQT1RRgOEse5vWnZ8NyiXjKSfFjaKJidTi5lJ4G3SVSh6yJHt7IjFvsCZY+WSaiLL0rmfO5rVMtU+FNVWaANktxi9hTpdupfqLMPDxJ1S\\/JkgkkHCyjdKIT55pxc\\/Dq7YYu3+t\\/Ou03MGDzW+E0k0q1oYFRRDP6xqVi6QTtNa7Y+VHQMsk0eJlVeO3zgiV2jyC0AWTmGADnjmt7a+G54QVompghAIqaCqXcaPxM3uhM1869V5t53963jt8mdj0\\/G0cK2WungC1fPxS6pMEsRBgZbnMvMtbJc5ZakTBTmRHqRTOSQPCaCQVNBJyfB4hq3v36YscfZCnOmQKuT3WdzU\\/XayT0nsW17uirelLqMaQfbn+emGTM7N85bZ3kSmLVeg+rW6AGvTutGRpp\\/92cLQUywFxNdyhOQD3Zp+3JUxS5fEe7DZR6t4+SzdTFSMkp5VSwK+aDurSfbx53XFFCzBax9ApNrWyMtt0VBcCs8Cty\\/7nVeKR4kvjWugVlqfbU0JeTTCtpdY8R0IyxfW+hhrz8ZkUBeL0sBXoOFWlNDrkN3UOsWLssO6byivMdOdJ27CY6Oj02a7eKhXXtf+J68rS+nlqdpiM+KkBFgBP5YXGr3zgkuSbahBxiBLQIerGLa1wvjnE9nJzh3Mx281eDh4Mi8oYLAdD9V7fNn3j5ZQ8jMyxBGp1h4HIFGTGWUq24RZgoiNMB3ROJAp30EfaibFeCjKtilPdI83TD\\/QO\\/ERahSMxhMwSBg4baw+btzWBJcON76ecpneOg06FcxZFmVCcLJv3IMqcYX4DpWASu21MH72KFSRUINy95t8WzaUequw7bL\\/x62Gue3XXvjRqCL080ueJ8Qymx8pTy+5YHXl8M4EVh595Ud+8ym3lbeUsLLyHtg57ne9ghm99xfS9E3t+aqOzJuJzOi2CFa+an6DeZ0h0fvDBGBcjrzu\\/ExXe5H7tFQJGvZkmWwp6DHuo40RN8gtQwnIMdCcJ0oMO+miU\\/Gsub6mnp6DIlyzAV5hpW1hmVKEVz4iXgTY2xIaW48uDF+\\/YEo7E\\/mTiot8cqNLfw8ryTtiXw1ck7Fytk9uoMK+djusgA6YIhG3ZoTzK5J7odGYWk3HXMJl1QxngRHg+bJ4IWG3PwI9NTdny5uFlJEf\\/joWNul\\/JdU1df7ziSbP\\/iIR1\\/MbnGZYtTq59HD4LtpaCWOe8f2t90e64ZtyoK186UjdNkZ5VBZRVdNaq9rdCdYlkC64LbvyadMePgq\\/iZqalbDVDrmocoFdeVohlhL19Y5QAhQRNWiuuzG0W1PNjLJ3lffcoXh6DF2Wt34+y0ce9mBjziC58GhMUB6uFvZFQ3C049UdXpLvnygjwD05TOiPHJiI8REfIjOhhCn39xH5NUwpXjhLr7eQWI\\/05lS7J1+s32KhSjRrf2mjQnQTX07tifAkP5I5sxSE1Xy8GgIk5tVNOU8MilfxzaXIhal4C23Yhy6Hc3LjmKcnsTdvHPZ42xSsoG33rPXAAJktPiVg2eqe7\\/xl9NS+EYVUbsfMVUB2qBniqubklGALk+kze40JAL76qwZba8r4P08iyV+1YkG2KwIOFt5fqCXJY82NDlRcsSHmuGmFmwzHZwILrhB3EqACtUXYSUtzm2v2iMX5DjtQRARvFyAHH4HgAyvha8ZLOn0EUeIU\\/7xlkDIibzLDv\\/09PKRhdXSpbWf9tWVAIRdO0oP0hdPoHb5K7pc8m3bzP+ix+kgvra1ryoYslZONmWYViF6qDJ7Ie31X1D48NyMwQ8mvLGqL\\/\\/TWDbUygWBJ0LX8XV4FtF73XEhORu\\/WKcKPMxOku8r3ri3P+0bB3rWD2HarhhUmtnuNUefpMbbX9nkZy2+z2KgPAHWqSIgXfo4iCiEKls=\",\"cypher\":2}";
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
  




function dailysign426() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.2.6.0) WindVane/8.6.1 Shuqi (iPhone8,2__shuqi__v4.2.6.0) 1242x2208 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page/?serviceWorkerOn=1&hideNavBar=1&from=ShuqiTab&sdk=14.3&utdid=YRPHOvDewScDALPRGBH3kbX0&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2082127980&sn=08F7FE3B83E32D8F65DCECCBE4629C63178A61CF&umidtoken=YRPHOvDewScDALPRGBH3kbX0&msv=8.0.0&brand=Apple&imei=59AF196F729EC9BBEE11F988A182A7CE8CB76B9E&skinVersionPrefix=1&appVer=4.2.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzNDUyMjcxOCwidXNlcklkIjoiMjA4MjEyNzk4MCIsImlhdCI6MTYzNDAwNDMxOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nu7VGQgG3a30eTs8oY3ybjCZP24rqtE6XQHlpEZYRnqXg4L-6BWt7s5I9xw0S8VR0UVYgUfE2hNd8_HFamspWA&skinColor=23B383&platform=iOS&ver=201102&mod=iPhone6splus&statusBarHeight=20.000000&skinVersion=1&wh=1242x2208&soft_id=21&utype=vip&skinId=999&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1",
    "Content-Length": "3712",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1634004325&position=501&userId=2082127980&signInType=1&wua=HIVW_3L4IjD%2FrE%2FyZ3BrGaGZB8GjARwz9v%2FcexzAUz22RXgVHL87DISeCxvGdHzdnIIPKQxh6DRXRHVL8DcsGyj4RnQzr8wL4D2hPzJYN6q4jC8yVy%2F2LNSnRuw1Zxssf0bfG6jmyU2C87GMDAG2ZhbGCKe0pUOeH12Be1U4NoaY%2FWykwXJ6KmQpKQQKPtqBhFs3iYbTB3NmdN%2BzOfOClNQdcgQpwIS1UCErf4tdtoivtU7FxAaD9TM3uYYOK3x2VCZvOgzHoGkrthFkNj2KUy7zfbEod6ihfME2%2FZf0z0Y20W6SNXzR9paaaqHyAR06UweFUWKn7Aw5hnAiutDBb24Y8wi12pxee4VVRd0zbqjSFZcp%2BEogWaTl9jQUxs1YWaeBv&ua=140%23Z9frOdDBzzZ9fzo2%2BbVsKtN8s7aGzdbA23n8KvC8M0Z%2BCze9E8W6tZEt5SeE7Icj4QOzlp1zz%2FVE9kPN7QzxvmKDaph%2Fzzrb22U3lp1xzBeLV2EqlaOz2PD%2BVofdjTP0MI2y7yDY5anrHRqjELrEkgKrOtqPUQo%2BDfNC8P10dNs27FQIH3zgFD9jjjaoE45NF21ht%2FAM9HUaU6sH478Wi8dtn%2BeIuYKzEjsEBuAlV92ChGB812y0iISyzS57a0ojzjGpdhWt%2FiZQK%2B9VU1o4s624PMM7lafHX%2FFoODaM84LC4I1aPiLule7AlV6ezsjtVEESRsBCzVIVfxSruF89HqdDlSeMtbYFpcbu02gbCXyrmoo5zdqnVTkVfcgtvbamKjB5yPS3Q3UTpYftA2idm16lrsSlDYnCRwRzzSScFWa0vFxyZ5Yzo9ORwF4DX6IZco1XFBjQnRRg3uXl%2FU6dOHUXXJ8XTVAIiCb78jnhVTfxYh9MZj6io%2BaOdSfJ9zni6F%2FdgpqF3juKHFSPyZOL1jkINSIsUVVdAKHllll7z%2F6NEKo4GMep6zAlgAYcqspKdjKOxPovwDLS5L%2FoDX0fbcSsYKQSnQqGzkojC5sNHuPv%2BsSwTu1IGP76RHmq3maHdkyywnGaLuI6gCHmVR5o6MUqr6TAarlU3gEZXd8nQHkVhwfLlh4DLWBLlzdXn8B2ss%2FpI6h0dEZNNgJfDPcxyTX9CC4pfYARUEUOgoSKacrPsRvbpVD6%2BbCgA%2FN%2FqxkyqQeHt%2BHY63kuaagLxfw4RZ9InOXmiBPAGj4JbDZU5bwNkDsMsImDMfXLgxTgioz7qN%2BpPuSamCHeZnU8mgFK%2Buk00TKF4szLKYzupnZNwCv0fj%2B0u0Q6ZfCCODAeeR08lrDGdMvrN5RkBs7ukJA2w69Xe%2Bm1BQdzJEgLiF8q9z%2FrYdEVwq%2BguufxHZE37TIZ0npcP2KqslZhelGOrgiOvHhLFxKk9m0Z9kh2SH1ZPB5jd%2F44qedST4Iq4n0sz0eE31433nCyl1AC%2F%2BiPPt4unRLCE7eIpSeRtmeQ%2Bn6pXj7CYFG3TomWJupvRDt%2BaFUAbkp5XcUrM76ShVsn%2Fc881QWTn4EXRXOpPzojO%2Fb2Ce2huv0vgh0YSali2tX15TUnm5p82ODcSbwxcUZY%2FrVaPVe3qvWIhY2BV0%2FSYV9Bj%2BguXPMs9JW%2FabzclVVb8jL130ZvmfNG3wsPvVFG%2FjPRcNCwmJ6V1G%2F%2FXki2WUvjRaLx%2B3lKEt28Nhj93XNdMGKRP3FfpB0eQOdnWK73Gwmp86qdaaM3A3wHYqdsz3D29%2BO1yfGoanUz60F6K5ih%2FgU%2F855iOSnfbZQ2r3T2XtgsE7j70kv2LkVyISuRL9sgVOMHozi1fb0kve%2BKpmhgrVbkP7cAxk%2Bwdz%2BsdkKVPpCkTRpYVem1%2FEfey03Q7n%2F6vAT%2BOn0OxInK3rBNRfYiXPuYswuwRvXkDEaTAoaNZ3PUjTEnZ7bHMdahSdVh0rQvhv%2Flepcb6Fskr665iubPP4KIGufVo3oVjQJXdVRXhoEyyf1iLrqXESmHMZCUK11H6dtbrkDKIh6hh6w%2BkNwdBFiuJkazDVxAizrDISkWUG8TT7Eplvi%2F2R%2BsbIOBO5eTWbUYMGwSFpt%2BgImtaSz4tthDnOVRvzfK%2FJ262dBvy54ZeF51APl%2F28bQZRTynb%3D%3D&miniWua=HHnB_yXQ1VPet2jAaIZZYJYp7klaIZ24T4sLWMLNlLaq1sNODVIO5QWDWheLEJMOmN9z6XQfNf3%2F6TM6tn%2FH0ZYnVdgn%2B3n9SbrXC9FeCpgRk9Hr3MAx0MORLAOL3KgYl8ETf&umidtoken=YRPHOvDewScDALPRGBH3kbX0&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=5a769e0b13d8a6ccdf49a4b535860875&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26hideNavBar%3D1%26from%3DShuqiTab%26sdk%3D14.3%26utdid%3DYRPHOvDewScDALPRGBH3kbX0%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2082127980%26sn%3D08F7FE3B83E32D8F65DCECCBE4629C63178A61CF%26umidtoken%3DYRPHOvDewScDALPRGBH3kbX0%26msv%3D8.0.0%26brand%3DApple%26imei%3D59AF196F729EC9BBEE11F988A182A7CE8CB76B9E%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzNDUyMjcxOCwidXNlcklkIjoiMjA4MjEyNzk4MCIsImlhdCI6MTYzNDAwNDMxOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nu7VGQgG3a30eTs8oY3ybjCZP24rqtE6XQHlpEZYRnqXg4L-6BWt7s5I9xw0S8VR0UVYgUfE2hNd8_HFamspWA%26skinColor%3D23B383%26platform%3D1%26ver%3D201102%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
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
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.2.10.0) WindVane/8.6.1 Shuqi (iPhone8,2__shuqi__v4.2.10.0) 1242x2208 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&sdk=14.3&utdid=YRPHOvDewScDALPRGBH3kbX0&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2082127980&sn=08F7FE3B83E32D8F65DCECCBE4629C63178A61CF&umidtoken=39lL8WlLOhrT0DV8bnWiiTceC2QAz4SF&msv=8.0.0&brand=Apple&imei=59AF196F729EC9BBEE11F988A182A7CE8CB76B9E&skinVersionPrefix=1&appVer=4.2.10.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzNDQ3NjI2NCwidXNlcklkIjoiMjA4MjEyNzk4MCIsImlhdCI6MTYzMzk1Nzg2NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.7ZGwQ6qFas6bfMVk-4T-zkj2iuXJTWP4mm4D-aol7IlL4D_qBpCOTBJ3_Fhy4ylyiOuq9SVMXUK4td-vaJfuhQ&skinColor=23B383&platform=iOS&ver=201218&mod=iPhone6splus&statusBarHeight=20.000000&skinVersion=1&wh=1242x2208&soft_id=21&utype=vip&skinId=999&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1",
    "Content-Length": "2056",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1633957884&position=501&signInType=1&wua=HIVW_MDFNh1AHKcSFV96aYRrzNI8ynvzZSISdPbsVlgBCEg1Crn9WoDHljl9g5yOC5iZ7Be8l7uZElnoSJ5AJmBCepizkMrEgsGRNfNLvPP9exTSw7ZVtaqrKk4lxrJlMNDeKbglOe6zFXxK37gW6SXCFhNJ%2B53E%2BzYAwbgmbW2opMV5fFMGz0dTzATKpIwNZgRavu9HzJV0OdGGtyxrThyRan2DUYdo3BPdTEAfSlWGnU8PrJTSHbRARTsuOpg0q89yoKNDKDbrBjJGkunpOkOGOfWAhO2LJXJQsscfuMe9pJrYFayDXG6MQrKAK2VcPpp5jPvQplt2J1luiemyF3GW83AKymb4gfObUruj0AkFPzZnN4Tr%2FNRB5tky7asHnX0tZYLtdNUaLcSYAhX55cve3kSCIbXYqUoA5ReqVNSwpoSY%3D&miniWua=HHnB_75G7%2Fg%2Bw4rfrnAtqRAga96uQeU0%2BJtvJCaO%2FhdaAsbTfZCswABY2FCEGcNFKWuXR9HYtUQOUeaFHsQ0dP1m1Sy%2BzF8LN8yR3qtnkszZU%2BKAzRAnVg1NVOKsGqvxHTkSMxrB%2B6NH6LT1aWeIU15pG1Q%3D%3D&userId=2082127980&umidtoken=39lL8WlLOhrT0DV8bnWiiTceC2QAz4SF&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.2.10.0&placeId=111111&timestamp=1633957884&sqSv=1.0&sign=206422f9df6d87d6bf820b99f927715a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.3%26utdid%3DYRPHOvDewScDALPRGBH3kbX0%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2082127980%26sn%3D08F7FE3B83E32D8F65DCECCBE4629C63178A61CF%26umidtoken%3D39lL8WlLOhrT0DV8bnWiiTceC2QAz4SF%26msv%3D8.0.0%26brand%3DApple%26imei%3D59AF196F729EC9BBEE11F988A182A7CE8CB76B9E%26skinVersionPrefix%3D1%26appVer%3D4.2.10.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzNDQ3NjI2NCwidXNlcklkIjoiMjA4MjEyNzk4MCIsImlhdCI6MTYzMzk1Nzg2NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.7ZGwQ6qFas6bfMVk-4T-zkj2iuXJTWP4mm4D-aol7IlL4D_qBpCOTBJ3_Fhy4ylyiOuq9SVMXUK4td-vaJfuhQ%26skinColor%3D23B383%26platform%3D1%26ver%3D201218%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
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
    "Content-Length": "4827",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "{\"message\":\"2wr7hy9ZBqJ8ZJ89ZhowbrScAAZM3bzqIw6tDNDlouiTQQO8H8QI1XVwgYErOcS6NyjdXZWGhfoh1iImYytpjzaQET9QdDfHN9gmjr4ZBwqkq9AFfoODhzRUVEEDkZ4S1Kg\\/bBVLl8g5+C4kY00pQA3ulRRdgvZ0CwOdkjUnw69Cm7dX9y4htwZeqP62cfFsH6OPumdgyhQAeojcTdpEERbxZWEtktFB36GBP52PdA9gEKgd8hTkf6wPse7DtMutC3SsfO1Fw9T0fjxAIHaZZJOE2EL840cLKO2jBveeNo7AeJC+OtII58JZlddhXQNbatyV64LrCiNXUe3\\/yiylP1gwVTa5SJattkeB5\\/X5Zxj1xMynVyp1oL\\/eHKKmKhWwuG0+pDIur6hWvqlu0qLnKzE4q1ZUOaHnWP0RCgmJef6ahtA5NM3ZHZufFrV74SS2oBN\\/8b2\\/aeNvexZFqwU1h\\/VAi4bOFi4lVRnVQVI8JYqC2mR0Q9gxHIuL3eaMMCCwFcLffNcGso5tHJEGEnhc9C7A4EETNDb5\\/\\/ezh9WKxZZOG9qoLWgkJ1fkIgJO2j7cmG+cqBHn7OZ\\/V7NHzvaxcJljF5l\\/vZbW2l4ss5gF9vLD+8FARIJMJjHZLaDVvwtHn\\/upqZM\\/FEqFGpzvgTRfEFv6aAVt5Z1AeagYiNrZspwsFQy5aR4j6Ssqt4tQ8t8WlpeeM5OSItc8AqezueWr7YlVQ1YV7EexP2sib0dFWcK69LYYjqJh4S4usdqVQe9mb2doidd423uqDSBcI52wOiKebobIJ6HnvAfYWPhYs7wVmtd6\\/CrQeBxKQHrW5KCISsukm6xhFBPDumcuvVRr0wMKNM3mvU0f94Gf8q7hf3DWUkDH7hEZ1b6qjS\\/VcCxd6mDMe9ymSywZ+gq0GekoCKb\\/6e6YeByIIvWFmKSlp6KCEqXUBBBJNTa7mqB4KO5m9aKe+fXqS80lu8ZsmWCyuO1gwlO0+68AGQ6fwtA+xGAXmTR93uiDfxCWBzKa8lXGfr4rl64mnUUZmd7cX8rXigb9DiqVao4no4SbaK1AhZK7uC8F\\/fkvjuTwss\\/EtDhBipm15XbqFsH5De6y+I8uM4D2zgvh9wirdLU\\/qdNI2GMAygYtY9Uu069zKZJnrwCtg+K7wJUfvszmpYW4AVzq99wQ8KorgBnwl47U1HrdFhRpBmhkDzVNacJd\\/NUnAwglMfc02agwXDK5Roleg9RVpBKBoZFo3VhZ4JzphcKUs3JWq\\/S5QqpJDNBtWEDcJ8LycqNcF70fGAmvCFyEtQdkfSmpj0VfUxzlX8Wl8WiEBbMx4xDj1ubotX1ri5e9IxGKPiEzoK+dApRWhX9vM61CMwbooxKaNjH9cnSo7NZdzHtFizX9HuTHlaGxv445Iu6j7xZqcShGBPVDMWNqItalxUANhxkpy8ll+fcDqMh5e1Htd0g+Jma2lSguGptwjT9zmNZtKrQHajcUOsqV24OxvInQr4DCdRRXLHsk0KgSBamGCYKhqBQ9yg0Hmc1npROYJZzmgNgCxWJbotgmyN6f4IWLkwoQv7S4YXSlIsg2F8fUXwZLrbLNOL+KigETIWgeN4OigL1zb76PEGBCDjrvNvbJMh+p6izRRF3xbP3EvxrpijEskuUPS46BYtJaoUTGjycX5TgL+Y\\/tXhMtKW8VzVyN8oJsEcPMp+\\/UrRycLcPGB+da8LkMBUz4IQMFL1GyndPccn1TOUmfDPLhvgAK8bKXE5eSnuo\\/FGY1l0jkQSrtOLcJhyxqdykeNlkyADG5i3QPImoeAfrCmYR1Z+QFRJ7aszB7xdnMrO2VMllD43V6sCzHkKNHBRTHQz9BnYRZt3TCkV1cNkq3uzRHjkJLwSxJuSv5m1U\\/YDvLb2DWWnO3PXP6U+l0XYnSYfApXMjw4TmbKxsckTQdxzzz+uLEhUpYzwiJgqnk78TfkFLCBxaglw9cb\\/9xscD7w28rH+pQlTCwbgStbewj9+BXcdTRt8hVRVHdTJNrvuA+rxjqd1wIYDreTlniYbd1CruJdzyJZKgYdBAxzLgNAN+shXeaXw8VdSmhGneubpedpUfWZL13mb5KMATjqaff+Gvohn9wTvuADw8CiwmK539qZQc5gJWhI5y03r\\/NLqV\\/Si6L\\/ZTR8tczFJpiS\\/xRPMihir6uhnLfHuR+9ATor8aw37Z3SJOy8G9IlCvHmFSNybIGldopRUy++AHoBQfQhXWKoiIai2ZE0ieih8RJIfK4KMtKfV8bmt8XLe8S\\/LVjSaq0R4vz5I3lQR5YDnhYU2cBS5y8oIe8cwHK5KytNvUIHJTkEgm3M1BJ9c\\/uP2DTzrKD5QRyoNyWxaQHcmoa07g6qxWBSOr3ofvJ2vHcQbrroAUx0bttaXg1wNVbT58CWEuZF87mpXsSpIeQxAuYaCwMH0lFchtIR4KZgLlocyUslWPNVGI4gHhr5ah9TsE8Jy\\/DK5HtCVXcPqNojMiDvsTR9Cn\\/WOParX0RQyUdVUKUymqww0zcSWt3K6J+\\/8XkBT\\/7\\/XGs3f+kRb0G3ieWmdyuctpr8COb4k5vmdgaPpbY035YTwuAKGMq+Z3t9bQ64ticvl+igSX2vr6ByDh7V8EVe6tFmL8Tw5kTag3fnoNcdJAsiCLjh6u4Iobe31+A3pppyNjVQVo3ktle+6J+wfx5O1pRqLAFRQD4xDJin3C0Cohf4cDCF5pZELVaN\\/njn9ioQNGqRRro2En9KHm7NJNOEnWwoHWTteKHjqXLvWO4vwbVg8ARFRMOGRPhk5laqKdQZzU0wlcT692x06I8t8VPBrQVDVGO5GEnmzPyaCusUZDDcpdXNLUwL0eVNast2dy5PTBPdyuMHO7R0vadHRYW1PBbnNtemNE5KyIEOpMS09tTa5DZ20LP1hwgKZi\\/uwHi43xmKqQ2PZIfveM7L1+8lLM4LG3YajuHDZlTJSmnvY3BW37zqN5+eCf0ka8WyZXG0YWT60tgFBq24hJFtn3u6ozkGx+\\/l6i2kdovNHKUkKh\\/RRsbTS3afW9b+ADpJ8rig3jhMPLIQC770C\\/g\\/7Cecvz8SAAI+dWOXpG1eV7+MvlyHbpxi34hYmdy6qn\\/OJty\\/vWiJjm\\/oJD04XpWa4tkT09Lwns8RTn9A32Ct88v3Rrybe8wY2SqjCMNRboWx9UgOFG6I+lZsLnk0zAXt0Gjp0OnVZrIcWuyY89YCx6QTXXdUtlHebh40TGavPEssTO28P5G4B5Na8dt3uR5DZIkPrHoeuIkVz7Lk7pLIbJP2VeoykSTxv\\/OWKu+qreaT8Dhi\\/KCHiEntEqE1lD6v8NWjsDb2J1M6Kefn0yTyDTPCgXpUOxeLgezBp0jHZLe422zXr0voUZaQfXAo7F\\/RkpgDR4I77dzn8IYEfbbipedgZ4iCEPnSpGXk0\\/ng9qSZPkcP37HP4WXIQ\\/KgEN9zf6v1ehocjZJrYuoon4v6GFxGlS2aqWYaRe9rdqX4PKbMYzc8IqUIRnAzvpItX+z6AYpF6BplE7JtuhHkWGNPcT8Og0gtK10KtXrkfd7PhMMM9qEHF2JasF47BcPQnpQ+ATFlcl1UlOtWOFvVPFk6csGVk7cc0PmC0+6ixq3kYqJF\\/RMzNEoP+qMKZB957Eiz7Y+UQp71LsN\\/ln6PCg\\/3uHKeH04NvOPof8J3wfwi1KvmGEtes+C0KgxWYjw\\/nBbss2MUFzvXDqGhW3RHUSMFvAQyKn3Jw9plLqFQ9zPp3whdW+sABwB5TwN9AlfbTaVTNSSa6VTWXKJRVzh7\\/PSYRW0T3sOMHOGN4dEWwyiDh9zpTroyPAGQSKI5AosUoF42WbRwJrPh6JO8kXpgCiPHBu9ez6wfbPXG7ATwRZFa+fVu5UiL\\/oIRu8UF+RAHegLFnzTS9IakLMZHNLNdYuAmvXErg5kUeJOfs\\/UhWKR4J+FgcBGhT5fyLZcyFAVNBCuRkAG6xq2hTHu5XxaF653V0GrbaSVn9Gtar2Pvkk4H7h+Rcod+qu8nSnGOaiZZw\\/ZGM+dXx9wT2Y9B3oG\\/sjQ3ji2hwSy64tS2msWnEnjAmQDLKjoJn2+8+GIKzDH5CbXQghjI7GqpTs66kVSJYSzjdlLYik93ZdcfqRvjSpuC2tUauPiEqm1M5H67GJfAas70JGVK7NmLvoPXtvteSkDVHTJqukSJGKRLZs79yOUc0Io2Bw2u4Hmg+tMCK31V\\/3l18vkyWBOq71rz6JPLwanGMZPApR+IxmQSr3ua+bp\\/kMOtJ35uvTqvGTbi1vGW3MXiPp\\/B8BzZ12O+M1aFFtFwPTqrxUiMVIa2jybztoqcwWRbRWOqCVG+5aV2joQBtGIcEmezxkGD6HEdmjJcoysc9PzVgxz89K3nkc1EfmVQgqL22fCgUOU8u9ml\\/I1K5TBy3nts59gWGR\\/6tI3zJz1gyFdmcMAQ8Ytx9Qe7xYn4CzMA++LcpfL65PkomrNDt1IWc4dCbUGXe6nwWUQ9v8zYskEYFWo3aTzA2e6ZR+BSmqrCTPtYWmwdDhojaVaNqAY8Nxq\\/07KpwHx8IUgrCYMfKuNxDp02J8lhrkPtYfU9Medvo0i2XlX2u8O7fKNgsBrvBRMQiejvfGu09XaZTSN1Y\\/Y9O4yScIY62SrAl+jSd3pNGh\\/9lFMf61OM3XqUrV+\\/RiQYj225Q4XJ2CxtAJzL4Wt2HOGcaWBv2CJHrEmBZHVweycY3XxWa+GzANXe06Ck6eM=\",\"cypher\":2}";
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
    "Content-Length": "4640",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "{\"message\":\"2ulTy0zzSnDHj6Y1pkZjihkZ4TNUbJap3DDpy12DTJkjV687V5lcVxxYTOFvXLXKSdDI2CYU19bqC8u9N3+Rj5T1ugGnOlKl2kN74tdN994trTQQqN3rVCuN879jOshByOp1pvm1mcgYaBHJ2QryRQ5FEzA5L33vJPtxJtVjUP4+dtclo2fkpR1oQuZhJM9BEt\\/gLQHBPyI0IaQ\\/age3o+EJXG9NvFb2Uk04Hv16rxAbtvFoQcb9DH443m4N6yrWWZvzoUVcd6\\/0N2jzRjIQclV76zSR+dN0wdSDndDv4iKMp\\/oZAO7l5Ly0dqqlrUwcBtj9LJP6O7AFL20+ekZUNkmmKyE9ECQnBgnV1Qg3t7XhsaTZHHWNbqx3fLqU75oeoDNxuKtsduFAGP6EcExyue2ouzzN+eueAhnomuwCquQJNdbD9nDZL5aR94EpnV1kIiUUsHU4mqYr5xnbSlTtJXmwVXolTYO5DX79jqoeFExrmZ0qfq9mUI1o+RQ435UJYGGMqofjCpiT0yJ6wXTngF8jScrJrU8oBnlnjyv5D8gmTsO02HIvvVKVQVJ0e\\/ekMsdIFoRCRQv6THL4DJvgoc7eQxcL1qRJyKbeBs7gaGGAh\\/aHu78ifsBM6A79cxMwNt0V\\/\\/GqBu1RtrEpjX+lMJuHdGVoX3Lyl4Vdx4qTkr6uE0hFsdfYZbBfSCvmFkV6\\/BuL1OEhXARl7eGxWRDKat9Fd4dyC0+isFc9j6TqDWsHxkOwe7LG6xQwWjYM1Xx5QCNKByytL5BNFapRC332KoPG99bB6fYi9hizYfCmXIjEfO3eBE7oVjHztNIkcgsbZcWe8Ta2yi9bOaI4ZSRxQeqGwxz\\/SKWfr87x+hr7TxJT2VWPDpH\\/cDAVZneM5f8pTuCVh+5tqME\\/xZbzlMXGUdvC1m\\/tjie6g7\\/RuqCtHaTyRRwanenssr4unAiNjiHAe+jzba0sIDBfvidVA256wj\\/6tdUO7942NVQFp5Odc7CIq1SRtiXsPPTVphYVNUmmoIbwmRwOWAgKSHQxv9QPKc+Vk7bhklTf22rXAqmKYIkW5w93eOjWhRcZxwOGZG9oCpZKTs4v8ZTEr45Ub3Jz0NNEUBHDeLy2yYCwcQN3Y9AJwpEBo9\\/PJNiAndKc9MgkSriTJukzyFyvT+2Zondv6mnfhVZ+Z0Lj4DIv8XegcUSfVWCtJTXBoIUe1FEbAmaVLEr8678CrYubZec3M3krZhIUvJKmmugP9ob7SMjGLwrciJjMfzvKGVIITTDwu1nxTdkcy\\/8krgHsIysqDBxMlFry2BRF5UOmco8sjKdiS2rzXjp5s8SKZuaDACkmTCLa\\/KcshKav9ldt5ReptU1aj3J77x4o\\/R5+oS+45XBiY\\/aMo5BucS1Pih8gcTsOaI0P1UTQ87YD7uw7TkDdJjcUti3xFOJNz0vhx0LtdDLTGeAkRYbZ7g7iKlBjUUv8+vnTIW2IYTvCaxgVwAaKns7+P1+11bj\\/Z0P+Sc4TCs+gssCk20skmlgNF0jMsM57pGJHzUvqnRWz0zt\\/930Cd4andSsWrNXbcGbpUeLP9aLdWznk0l4YIxeMyklHDN53CVXwi+IJIBmsPfYr+4OrJZP0exlUJsZnnZmjR5W1s4R8iyLWvrG2csppJiRqDH61L1LHEJdPC04ZH7Ps8jj+imUCsTtwlmvfb9f3JCVAoq1XI3Gw+nf5B44SlKPHQd1NFOzwfc30jTDnb1DaNk4h5E5JU8GKVYAj8YNOkc5KAs2v3D33X9s3vjBV0cjgd4aAVl8c1jqerkYg5xVdwqrXKHxulEiRvqN+FeevuIrOM2XWv9Q\\/o3JjTRyuB0A1w29xR6DgEw86A6rt5JCT5rEgDXapIMmaN0a9zvpR5YflQhEhV2Y4khrGP1EWb0v2Wu\\/jOs25SQOuGzo3yYSENOxVHaslC27H74dUdvhsMWRoHltc\\/vw2HFunUTbNYxKud2HyfGLQWN\\/dftR\\/k3pgV+KA9idNow4diWxps6sZ2GTW4MGil\\/apQOuPmNBeQDZfdZH\\/OBcmo2No4iORH4mekk7rYmhY5SRZ1y7lnxUb01SBbVVsZ8SZBrpqDOfrGzNO6lKvS\\/aZwruPeqTRgThI+U8Cu7VPTprDS76XuWCvepGI6CWmj\\/pL80QfxlfGCsz08GwqGY5+qMBOnwfo6QAkJl8jdk7JPKPGaSzH5RQYTibFe\\/g0NFkMWNKZexRzDeGnmT6kxdEyHsLa7H3yIRxfVAXhklbe9+e8iG7ejcR0bjXm9pB8vhunj4OFbVoWHD1\\/cCMSHhd+JffmIHRbm0R\\/78BKdcpyC+FIU\\/uQ5ZzjpFVnYn35oFPeycAR77XXCBK7X5cjRcHQorVAllZg3TO8d0vGqnf8Fi+mCGJPJQywGCmKMRFIO523Bl5sZ6soGhaSXQA4gCvAuJEh0a8WVxZ+Ew8T6JCimmGA6r3cCF13Pu7cj4lqY7uxKOl8B+lSrFJotRay8EgoHrkowTJByNkQbeoXz7dsSRr9KUzJMNy\\/mXZLgNm8rHM\\/6qnJlbwz7TzZ\\/jyiDzs1XN5mFCF14zeyNt+PtLLI6weiceCDqZZm41ZqNZqxMyVZNIbYQH+MWNTfvOo7dJAfr4y\\/XJpuqDUpCj6hhdxody+2DQCh2JXobJ11HvzVyiLXfNE26ffIGsJ3nmuKk4zXOW4Z3zJNVccJbsEYTc1wj0mAAlrfwqepxUJwKfYMT9RDdEIu7IQkCQFbGIpbkxa0UZFMEDf7igfXmdbBmZkA5c7+FzACZnoW6njPnJrlZZk4hdxdou+jKwpJnXVQ7GEZWS1d8XHEpdgXB9BwzU9rcbZfSG1s8shFQUO6y6Au7gW\\/S\\/NIDgZ494b2V0RT7omCC\\/LcTFlXH\\/35WEUH5D9BhvGJGCgWq8URzgzonlwANv+9N9k3mDZFVz2muRhVZPGuIXkEStI6RZQoIzJ6HibCtdS0SUu9lZ\\/SnzJE\\/oK7oF3Ah64zw4am0zwgeKKEkI1LShibejhmNFPwOwYp9jZQJkHsd\\/zwBK\\/jW5pBvE9OHlYhIYxsEaLE9YKK9H3tckEPId4eQLKhz0zMtIaQgKhIldt1dKUKgNavuUjwTWZ2pFvIiXp0hFLhaxJUGtLI\\/mnAmCxyGzcOKZPEiW1H20M56mX8Ng7FgZPpxePuvu08CFhKKvm0Mhj0cTdyZnG\\/jDlS\\/tDeCicCnoAZNnfJVqAQTsinWUFv0L1JAXp0+JhA9zGNBvKArwkUQU2GRPOYHHi18Oj4ZvMAT9p4ESIdfmjMedGRCn9oULnNai1dxQoBD3a49BzucO8rpVqvjpaOdKKvU7+94kFSgSFFsFYs9FWaDYLiAYa2ML6cqK4ZCkjHMEBL3tL21n1x7ihnpjkRvdYQo5AYz0L5W57dIDdjqLABX13LoSLz+3ZkBpYWKmLTwmQUVW32XTpp8z6VUvWr4HZuiyJTwNGuluj4IbGJQB19wrohpUYYwR\\/OB+kRHXhpqDFl4jBbFinYueT5\\/iwNCNUEq81ubvfG7zg7ub7M\\/UTvksxGSv2snJJUdujcgSbuSFkMYd2bsvDe+8xJ\\/MIdtCHMNyAiZ0pYRJZx4NhI+57b5zVbqedqB52e+yLqp1bNvaU3v9bSIim7xmhXRtYZm64ykDxS8ezygvi9tlJRTsvDyR43if6plf2yk4SDlKlFJj\\/R5fkxXgZ7+VhMHtMaD4ZcrkcFihScgODJpdYJQKdd1NhGpMJBXm7aIbKHjBPjf8+KvcMDyekP\\/yvz7o5Cmhq6\\/LM5g6482cEbCqTDan7rXwGH8v7ZQQIBwXroTvYfIqgQOHJyk5OLsbZNeoS005i6KfMFuEU4nMJ+xUPgzntefT\\/QJ8VGAXoe3S75ry0NVbXRxRMWsGIQg5zeQL2MEzO\\/4Ne6d4mR5cOHSdkLlWeDJMgiuSVIi0LmoJb6xUCcZkC31Y4GUy05c0Ak3OT4rXw8ErBse\\/oQKFGPgPiua76K4ztvVqb8m8ltpqzMDzz\\/DZhY4rYO4AR7dPpnS0hsdWvoBVYhJKPqcJhPNl+mAXkkc57YhBYHAIqk7G93+hhONOzSKuMKLiKVIeldTBb5VcBVtkUbtJrlCByUhL5ZqhWRnerIBjs1IOzUZ7wWU62UccAeI5qMjq6uPzUjObT5WhV4NQmmkSkVM1lm+OhXXWG5m\\/dwjfQXBnaskmTO\\/ENXW1kPftYGGqz58jXzHB97u47lZ6\\/yscRvdw7Xi8dx29eiQhd3\\/VQ3NG8TU8\\/wOxkrBqZzcAlxxBI9K0Bvd1LaubOX2h9K+9UmPEcXqJpCH9kzk+rv6\\/Dl2WAo5zF36dKWth1qWWjQ6xuZA2Uw75Ix83c7j2mGf5BJFkqEWLrdYT6yydVPOl2Lfo8LJ8J4s3JeAv5y+lbQ79MvvvveQDb6E0iX\\/D1cIYxZ6jDLRyI2mIUNH3etaxYTIkkFkQpYZSk0z9t50JCOuMs8\\/phu93UQ\\/VXOdSk+VIjtMW8a9LoKuqOwaP\\/lgO9VXpWtLFvlKP3Vo\\/JvCC6KRay\\/0M\\/29J4k=\",\"cypher\":2}";
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
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.2.10.0) WindVane/8.6.1 Shuqi (iPhone8,2__shuqi__v4.2.10.0) 1242x2208 Winding(WV_89) WK",
    "Referer": "https://render-web.shuqireader.com/render/wx-activity/page/lottery_page_red_package_rain/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.3&utdid=YRPHOvDewScDALPRGBH3kbX0&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2082127980&sn=08F7FE3B83E32D8F65DCECCBE4629C63178A61CF&umidtoken=39lL8WlLOhrT0DV8bnWiiTceC2QAz4SF&msv=8.0.0&brand=Apple&imei=59AF196F729EC9BBEE11F988A182A7CE8CB76B9E&skinVersionPrefix=1&appVer=4.2.10.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzNDQ3NjI2NCwidXNlcklkIjoiMjA4MjEyNzk4MCIsImlhdCI6MTYzMzk1Nzg2NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.7ZGwQ6qFas6bfMVk-4T-zkj2iuXJTWP4mm4D-aol7IlL4D_qBpCOTBJ3_Fhy4ylyiOuq9SVMXUK4td-vaJfuhQ&skinColor=23B383&platform=iOS&ver=201218&mod=iPhone6splus&statusBarHeight=20.000000&skinVersion=1&wh=1242x2208&soft_id=21&utype=vip&skinId=999&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1",
    "Content-Length": "2161",
    "Accept-Language": "zh-cn"
};
         const body = "activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&wua=HIVW_4Fz2Am3smqSwumjOJPnz9qCjsh%2FpBaTpt99TYbejzMi1VY9GBp4Bzr66Ic4se0HtXbZ5fU3e0Kj1K2skD5zxIaRiUJgA%2BzvEpKLUMrHGlIElz5YYmewgYUXafzlcTPs6fTW58JpGn%2FRlMkol3pAy1DihwFv21km1FJwmalG8ZYWY9zll6p%2Fe6gObLzdufWmSDrQVBIhFVpp%2BPalVILdlNoXdNPEEcff4aj69%2B%2FfzrsivLx%2FO%2Bey00EZFDlXJqa4DPTN1sARVbo3Edsuhlxip1hyUJyHHPii0shHwYjljCW7%2BSg%2Bd0yPh9PyTuA0fxE5RzoqlzOQ8ORmlIFLvz1WuSO5t0FpDMSoXYV63hRkdXLyidVJLwbz37QZYvni1eqPvX256S66hUisQEo0eKVl5Ttm%2FHLyORMsCTmW696c5Scw%3D&miniWua=HHnB_NC8VaFOD68DiY%2BoD6duZGPahDTKsmyOti%2BkLa3ADiZX9dpSiCZBE8ES4sZidtAdm9WYvjLOpkdM3TGHsGbZ0yoJNVkTS6nNkfejBHfLbeEEsdQ5MAe0eE5fMt2h71MSFXBsFobRj5XubQtyUzMbLZA%3D%3D&userId=2082127980&umidtoken=39lL8WlLOhrT0DV8bnWiiTceC2QAz4SF&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.2.10.0&placeId=111111&timestamp=1633958412&sqSv=1.0&sign=57eb416780b1df5067411a0bed66143b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.3%26utdid%3DYRPHOvDewScDALPRGBH3kbX0%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2082127980%26sn%3D08F7FE3B83E32D8F65DCECCBE4629C63178A61CF%26umidtoken%3D39lL8WlLOhrT0DV8bnWiiTceC2QAz4SF%26msv%3D8.0.0%26brand%3DApple%26imei%3D59AF196F729EC9BBEE11F988A182A7CE8CB76B9E%26skinVersionPrefix%3D1%26appVer%3D4.2.10.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzNDQ3NjI2NCwidXNlcklkIjoiMjA4MjEyNzk4MCIsImlhdCI6MTYzMzk1Nzg2NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.7ZGwQ6qFas6bfMVk-4T-zkj2iuXJTWP4mm4D-aol7IlL4D_qBpCOTBJ3_Fhy4ylyiOuq9SVMXUK4td-vaJfuhQ%26skinColor%3D23B383%26platform%3D1%26ver%3D201218%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
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
