import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    tracks: [
        { id: 1, name: 'Broken Bones', artist: 'KALEO', href: 'https://39s.musify.club/get/69/10523970/27310157/1/1/0/kaleo-broken-bones.mp3', img: 'https://avatars.yandex.net/get-music-content/2373979/72d623a6.p.1194096/m1000x1000' },
        { id: 2, name: 'Way Down We Go', artist: 'KALEO', href: 'https://musicd.mycdn.me/v0/stream?id=v0_10032108778_2_1&cid=v0_10032108778_2_1&fid=123005440598394&uid=78c8df93941ef1e0adeedc960c35fbf6&sid=2341e2b6e27daad40670b2f6fbfd105fa459b2342cf9749e526621694b314c36186feac71718edd04798460f2e826486587da02c5d5ab02a63640c666344b5f8&ts=1657821091426&md5=c2c8afeaf4cf16714bfaf6b2b6298715&clientHash=10717698771581731311401875915516314791637757203203171200201203203163157997741351191511149', img: 'https://avatars.yandex.net/get-music-content/2373979/72d623a6.p.1194096/m1000x1000' },
        { id: 3, name: 'Cool Kids', artist: 'Echosmith', href: 'https://musicd.mycdn.me/v0/stream?id=v0_10018169084_1_1&cid=v0_10018169084_1_1&fid=90079605039554&uid=b9a427a813b8d4e2ddeb87c8c96baf8b&sid=3dc960121b4ec2413394406e8f879d795a928b14df56ef2b16cc2db19727794c3be2e3721c302ec7093735bd42370679a4010594db5466397753e0a862f662a1&ts=1657821193814&md5=3b538c2a5d3221c4cc3f2b4ba12b4c41&clientHash=36021221218821221262010019221221246313639214847241122016420820519713758748212212139418212212', img: 'https://avatars.yandex.net/get-music-content/33216/c1a3338a.a.1598350-8/m1000x1000' },
    ]
}

const TracksReducer = createSlice({
    name: 'tracks',
    initialState,
    reducers: {
        alphabetTop(state) {
            state.tracks.sort((a, b) => a.name !== b.name ? a.name < b.name ? 1 : -1 : 0);
        },
        alphabetDown(state) {
            state.tracks.sort((a, b) => a.name.localeCompare(b.name))
        }
    }
})

export const { alphabetTop, alphabetDown } = TracksReducer.actions

export default TracksReducer.reducer