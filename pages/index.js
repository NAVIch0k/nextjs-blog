import TrackList from "../components/TrackList/TrackList";
import Layout from "../layout/Layout";

const Index = () => {

  const tracks=[
    {id:1,name:'Broken Bones',artist:'KALEO',href:'https://cdn.mp3xa.cc/VSoQdr7JEdzoTDu8tQdedw/1657776656/L21wMy8yMDIxLzEyL0thbGVvIC0gQnJva2VuIEJvbmVzLm1wMw',img:'https://avatars.yandex.net/get-music-content/2373979/72d623a6.p.1194096/m1000x1000'},
    {id:2,name:'Way Down We Go',artist:'KALEO',href:'https://cdn.mp3xa.cc/LcoqrqAy0-8paOvUQ3-etQ/1657776769/L21wMy8yMDIxLzEyL0thbGVvIC0gV2F5IERvd24gV2UgR28ubXAz',img:'https://avatars.yandex.net/get-music-content/2373979/72d623a6.p.1194096/m1000x1000'},
    {id:3,name:'Cool Kids',artist:'Echosmith',href:'https://cdn.mp3xa.cc/WOCflnpTrOSK0au7s9t94g/1657776811/L21wMy8yMDIxLzExL0VjaG9zbWl0aCAtIENvb2wgS2lkcy5tcDM',img:'https://avatars.yandex.net/get-music-content/33216/c1a3338a.a.1598350-8/m1000x1000'},
  ]

  return (
    <Layout>
      <TrackList tracks={tracks}/>
    </Layout>
  );
}

export default Index