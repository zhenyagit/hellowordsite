    var r = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN0PQRSTUVWXYZO123456789+/="
      , n = {
        v: function(e) {
            return e.split("").reverse().join("")
        },
        r: function(e, t) {
            e = e.split("");
            for (var i, n = r + r, o = e.length; o--; )
                ~(i = n.indexOf(e[o])) && (e[o] = n.substr(i - t, 1));
            return e.join("")
        },
        s: function(e, t) {
            var i = e.length;
            if (i) {
                var r = function(e, t) {
                    var i = e.length
                      , r = [];
                    if (i) {
                        var n = i;
                        for (t = Math.abs(t); n--; )
                            t = (i * (n + 1) ^ t + n) % i,
                            r[n] = t
                    }
                    return r
                }(e, t)
                  , n = 0;
                for (e = e.split(""); ++n < i; )
                    e[n] = e.splice(r[i - 1 - n], 1, e[n])[0];
                e = e.join("")
            }
            return e
        },
        i: function(e, t) {
            return n.s(e, t ^ 138308279)
        },
        x: function(e, t) {
            var i = [];
            return t = t.charCodeAt(0),
            each(e.split(""), function(e, r) {
                i.push(String.fromCharCode(r.charCodeAt(0) ^ t))
            }),
            i.join("")
        }
    };
    function o(e) {
        if (1) {
            var t = e.split("?extra=")[1].split("#")
              , i = "" === t[1] ? "" : a(t[1]);
            if (t = a(t[0]),
            "string" != typeof i || !t)
                return e;
            for (var r, o, s = (i = i ? i.split(String.fromCharCode(9)) : []).length; s--; ) {
                if (r = (o = i[s].split(String.fromCharCode(11))).splice(0, 1, t)[0],
                !n[r])
                    return e;
                t = n[r].apply(null, o)
            }
            if (t && "http" === t.substr(0, 4))
                return t
        }
        return e
    }
    function a(e) {
        if (!e || e.length % 4 == 1)
            return !1;
        for (var t, i, n = 0, o = 0, a = ""; i = e.charAt(o++); )
            ~(i = r.indexOf(i)) && (t = n % 4 ? 64 * t + i : i,
            n++ % 4) && (a += String.fromCharCode(255 & t >> (-2 * n & 6)));
        return a
    }
    
t = "https://vk.com/mp3/audio_api_unavailable.mp3?extra=zwHWnwnelI9nBJO1nhrSswrLrMfoy3y3mtbOzgWOEejZDwuYEhm1ANHtshzglKf6qLuUn3LwuJnrDdG2tu1tzef0ywDZmdHHzdDwEda4lZj5u2f4AO0XrJPPqvzkCI9UANb0Dwe2BhnSCc1hnxHYzvq5CZfxp2j3nuzIv3jAr2q5wKzQqLCTDNLesxrry29Toe5YAurUAxrzqMjHxODNEJHKvg1vzv9wDLqXu1GYs3DXyLHZmxyXlxjTntv4mfrZzwyVoxq#AqS3ndC"
console.log(o(process.argv[2]))