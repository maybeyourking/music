export default{
    currentSong(state){
        // console.log(state.playList[state.playIndex])
        if( state.playList.length == 0 ){ return {} }
        let song = state.playList[state.playIndex]
        let albummid = song.albummid
        let albumimg = `https://y.gtimg.cn/music/photo_new/T002R300x300M000${albummid}.jpg?max_age=2592000`
        song.albumimg = albumimg
        // let songmid = song.songmid
        // let songUrl = `http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400${songmid}.m4a?guid=5803862620&vkey=120F2ED4917B45831BEA237DE0749B85557F90519A87BC6675680412122BBDC6FB8B67905D67B09AF175B03600A945577247EB3115610DC4&uin=0&fromtag=38`
        //             //http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400000Qepff3UyUWO.m4a?guid=7371028324&vkey=F8DBB9BC15CAD1B13092EFDA0822531C3FD906D6C95F8D761931FCB758EA56F992770DA05E89C4F2C17E83851E451F446936E806A14EF836&uin=0&fromtag=38
        song.songUrl = song.purl
        let endTime = parseInt(song.interval/60)+":"+(song.interval%60<10?("0"+song.interval%60):song.interval%60)
        // console.log(endTime)
        song.endTime = endTime
        return song
    }
}

// http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400000Qepff3UyUWO.m4a?guid=5803862620&vkey=120F2ED4917B45831BEA237DE0749B85557F90519A87BC6675680412122BBDC6FB8B67905D67B09AF175B03600A945577247EB3115610DC4&uin=0&fromtag=38
// http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400001Qu4I30eVFYb.m4a?guid=5803862620&vkey=881CBC3902F36E7F80BAB5B9D590192A979AD2D77EC599C7F5E5F4A8E39E8D992E9123D1C512F337D6E9771F8858A40B66D01C47095FAA1B&uin=0&fromtag=38