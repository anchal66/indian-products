import {useState, useEffect} from 'react';

const electronicsList = [
    {
      type: 'Electronics',
      payload: [
        {
          id: Math.floor(Math.random() * 9999).toString,
          name: 'Television',
          img_url: 'https://images.samsung.com/is/image/samsung/in-fhdtv-n5200-ua32n5200arxxl-frontblack-184404442?$PD_GALLERY_L_JPG$',
        },
        {
          id: Math.floor(Math.random() * 9999).toString,
          name: 'Refrigerator',
          img_url: 'https://www.sathya.in/Media/Default/Thumbs/0029/0029034-lg-fridge-glb221argy.jpg',
        },
        {
          id: Math.floor(Math.random() * 9999).toString,
          name: 'Air Conditioner',
          img_url: 'https://www.kitchenarena.in/wp-content/uploads/2018/01/split-ac-vs-window.jpg',
        }
      ]
    },
    {
      type: 'Mobiles',
      payload: [
        {
          id: Math.floor(Math.random() * 9999).toString,
          name: 'Nokia',
          img_url: 'https://static.toiimg.com/thumb/msid-74725805,width-220,resizemode-4,imgv-1/Nokia-83-5G.jpg',
        },
        {
          id: Math.floor(Math.random() * 9999).toString,
          name: 'Samsung',
          img_url: 'https://www.gizmochina.com/wp-content/uploads/2019/06/Galaxy-A60-featured-546x546.jpg',
        },
        {
          id: Math.floor(Math.random() * 9999).toString,
          name: 'Apple',
          img_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567022175704',
        }
      ]
    },
  ]

export default ()=>{
    
    const [companyList, setCompanyList] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    const searchList =(searchTerm) => {
        try {
            setCompanyList([...companyList, electronicsList]);
        }
        catch(e){
            setErrMsg('Something went wrong');
        }
    };

    useEffect(()=>{
        searchList('pasta');
    },[]);

    return [searchList, companyList, errMsg]
}