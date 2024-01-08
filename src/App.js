import React, { useEffect } from 'react';
import style from './Style.css'; 

const App = () => {
  useEffect(() => {
    const imageUrls = [
      "https://image.univstore.com/20231023_apple_ipad_promotion_faf9f8_web_maintop.png"
    ];

    const container = document.getElementById("ct3");

    imageUrls.forEach((imageUrl, index) => {
      const linkElement = document.createElement("a");
      linkElement.className = "apple-pad";
      linkElement.href = `https://www.univstore.com/event/20230908_apple_ipadairdg`;

      linkElement.style.backgroundImage = `url(${imageUrl})`;

      container.appendChild(linkElement);
    }); 
    
  }, []);

  

return (
  <div>
      <header className={style.header}>
        <div className={style.box1}>
          <a href="uvs.html" className={style.uvslogo}></a>
          <div className={style.buttonBox1}>
            <a href="https://www.univstore.com/search" className={style.searchButton}>검색</a>
            <a href="https://www.univstore.com/user/login?redirect=%2Fsearch" className={style.loginButton}>로그인</a>
          </div>
        </div>
      </header>

      <div className={style.container2}>
        <div className={style.box2}>
          <div className={style.rightButton}>
              <div className={style.rbutton}>디지털</div>
              <div className={style.rbutton}>컴퓨터</div>
              <div className={style.rbutton}>가전</div>
              <div className={style.rbutton}>뷰티</div>
              <div className={style.rbutton}>푸드</div>
              <div className={style.rbutton}>리빙</div>
              <div className={style.rbutton}>인테리어</div>
              <div className={style.rbutton}>패션</div>
              <div className={style.rbutton}>교육/문화</div>
          </div>
          <div className={style.leftButton}>
              <a href="https://www.univstore.com/event?type=all" className={style.lbutton}>혜택/이벤트</a>
              <a href="https://www.univstore.com/brand" className={style.lbutton}>브랜드</a>
          </div>
        </div>
      </div>

      <div className={style.container3}>
        <div className={style.box3} id="ct3"></div>
      </div>

      <div className={style.container4} id="imageContainer"></div>

      <div className={style.container5} id="ct5"></div>

      <div className={style.container6}>
        <h1 className={style.recommedPick}>추천 PICK</h1>
        <div className={style.box6} id="itemContainer"></div>
      </div>

      <div className={style.container7}>
        <a className={style.contentsText} href="https://www.univstore.com/event?type=content"><h1>CONTENTS ▶</h1></a>
        <a className={style.contentsPicture} href="https://www.univstore.com/event/20231103_contents_keychron_b_series" style={{ backgroundImage: `url('https://image.univstore.com/202311103_contents_keychron_b_series_mainpage_w.png')` }}>
          <div className={style.cpTextbox}>
            <div className={style.cpTb1}>팝콘같이 팝팝</div>
            <div className={style.cpTb2}>키크론 B 시리즈</div>
            <div className={style.cpTb3}>Be the good KEYBOARD with 키크론! 기계식 키보드 매니아에게 커다란 사랑을 받아 온 키크론에서 초슬림 펜타그래프의 B시리즈를 출시했어요! 팝콘같이 팝팝 튀는 다채로운 컬러의 B시리즈를 구경해볼까요?</div>
            <div className={style.cpTb4}>더보기 ▶ </div>
          </div>
        </a>
        <div className={style.contentsItem}>
          <div className={style.citemBox}>
            <a className={style.citemPicture} href="https://www.univstore.com/item/34637" style={{ backgroundImage: `url('https://image.univstore.com/B1-K5_thumbnail-01-F5.jpg')` }}></a>
            <div className={style.citemExplanation}>
              <a className={style.corp} href="https://www.univstore.com/brand/keychron">키크론 ▶</a>
              <a className={style.itemCorp} href="https://www.univstore.com/item/34637">B1 라벤더퍼플 4in1 블루투스 무선 슬림 미니 키보드 펜타그래프</a>
              <p className={style.itemPrice}>44,000원</p>
              <a className={style.itemSale} href="https://www.univstore.com/user/login?redirect=/item/3371">대학생 인증 후 가격 확인</a>
            </div>
        </div>

        <div className={style.citemBox}>
        <a className={style.citemPicture} href="https://www.univstore.com/item/34638" style={{ backgroundImage: `url('https://image.univstore.com/B1-K4_thumbnail-01-F5.jpg')` }}></a>
        <div className={style.citemExplanation}>
          <a className={style.corp} href="https://www.univstore.com/brand/keychron">키크론 ▶</a>
          <a className={style.itemCorp} href="https://www.univstore.com/item/34638">B1 블라썸핑크 4in1 블루투스 무선 슬림 미니 키보드 펜타그래프</a>
          <p className={style.itemPrice}>44,000원</p>
          <a className={style.itemSale} href="https://www.univstore.com/user/login?redirect=/item/3371">대학생 인증 후 가격 확인</a>
          </div>
        </div>

      <div className={style.citemBox}>
        <a className={style.citemPicture} href="https://www.univstore.com/item/34633" style={{ backgroundImage: `url('https://image.univstore.com/B6-K6_thumbnail-01-F5.jpg')` }}></a>
        <div className={style.citemExplanation}>
          <a className={style.corp} href="https://www.univstore.com/brand/keychron">키크론 ▶</a>
          <a className={style.itemCorp} href="https://www.univstore.com/item/34633">B6 레몬옐로우 4in1 블루투스 무선 슬림 풀 키보드 펜타그래프</a>
          <p className={style.itemPrice}>54,000원</p>
          <a className={style.itemSale} href="https://www.univstore.com/user/login?redirect=/item/3371">대학생 인증 후 가격 확인</a>
          </div>
        </div>

      <div className={style.citemBox}>
        <a className={style.citemPicture} href="https://www.univstore.com/item/34634" style={{ backgroundImage: `url('https://image.univstore.com/B6-K7_thumbnail-01-F5.jpg')` }}></a>
        <div className={style.citemExplanation}>
          <a className={style.corp} href="https://www.univstore.com/brand/keychron">키크론 ▶</a>
          <a className={style.itemCorp} href="https://www.univstore.com/item/34634">B6 민트그린 4in1 블루투스 무선 슬림 풀 키보드 펜타그래프</a>
          <p className={style.itemPrice}>54,000원</p>
          <a className={style.itemSale} href="https://www.univstore.com/user/login?redirect=/item/3371">대학생 인증 후 가격 확인</a>
          </div>
        </div>
      </div>
    </div>

    <div className={style.container8} id="ct8"></div>

    <div className={style.container6_2}>
      <h1 className={style.recommendedPick}>새로운 ITEM</h1>
      <div className={style.box6} id="itemContainer2"></div>
    </div>

    <div className={style.container9} id="ct9"></div>

    <div className={style.container10} id="ct10">
      <h3 className={style.ct10Textbox}>믿고 살 수 있는 학생복지스토어</h3>
    </div>

    <footer className={style.footer}>
      <div className={style.container11}>
        <div className={style.ct11Textbox}>
          <div className={style.ct11Tb1}>
            <p className={style.ct11Tb1Box1}>학생복지스토어 고객센터</p>
            <a className={style.ct11Tb1Box2} href="">02-6352-9331</a>
            <p className={style.ct11Tb1Box3}>평일 10:00~18:00 / 점심시간 12:00~13:00</p>
            <p className={style.ct11Tb1Box4}>주말, 공휴일 휴무</p>
            <div className={style.ct11Tb1Box5}>
              <a className={style.ct11Tb1Box5A1} href="mailto:hoo6710@naver.com">help@univstore.com</a>
              <a className={style.ct11Tb1Box5A2} href="https://www.univstore.com/user/login?redirect=/user/my#user_qna">1:1 문의하기</a>
            </div>
          </div>
          <div className={style.ct11Tb2}>
            <div className={style.ct11Tb2Box1}>
              <div className={style.ct11Tb2Box1Div1}>
                <a href="https://www.univstore.com/notice">공지사항 | </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScdGBn69_KYVBqBNboJPDah0UBJ2XLSMJd-oca6iRM1Pu-WzQ/viewform?pli=1">입점/제휴문의</a>
              </div>
              <div className={style.ct11Tb2Box1Div2}>
                <a href="https://www.univstore.com/policy/terms">사이버몰 이용약관 | </a>
                <a href="https://www.univstore.com/policy/privacy"><b>개인정보처리방침</b></a>
                <a href="https://ftc.go.kr/bizCommPop.do?wrkr_no=3768801262">| 사업자 정보 확인 | </a>
                <a href="https://www.univstore.com/policy/consumer">소비자 불만/분쟁해결기준</a>
              </div>
            </div>
            <div className={style.ct11Tb2Box2}>
              <img src="https://www.univstore.com/image/seller-info-company.png" alt="seller-info-company" />
              <img src="https://www.univstore.com/image/seller-info-1-new.png" alt="seller-info-1-new" /><br/>
              <img src="https://www.univstore.com/image/seller-info-2-new.png" alt="seller-info-2-new" />
              <img src="https://www.univstore.com/image/seller-info-3-new.png" alt="seller-info-3-new" />
              <img src="https://www.univstore.com/image/seller-info-4-new.png" alt="seller-info-4-new" />
              <img src="https://www.univstore.com/image/seller-info-5-new.png" alt="seller-info-5-new" />
            </div>
            <div className={style.ct11Tb2Box3}>
              <a className={style.ct11Tb2Box3Img} href="https://www.instagram.com/everyuneez.official/" style={{ backgroundImage: "url('https://www.univstore.com/image/ic-instagram.png')" }}></a>
              <a className={style.ct11Tb2Box3Instagram} href="https://www.instagram.com/everyuneez.official/">Instagram</a>
            </div>
          </div>
        </div>
        <div className={style.ct11Explan}>
          <p className={style.ct11Extext}>유니브스토어(주)에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이 포함되어 있습니다.
            <br />개별판매자가 판매하는 상품에 대해 유니브스토어(주)는 통신중개판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
          </p>
        </div>
      </div>
      </footer>
    </div>
  );
};


export default App;
