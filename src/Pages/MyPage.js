import React from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './MyPage.css';
import dummyTweets from '../static/dummyData';

const MyPage = () => {
  const filteredTweets = dummyTweets;
  const currentUserTweets = filteredTweets.filter((tweet) => {
    return tweet.username === 'parkhacker';
  })
  const currentUsername = currentUserTweets.length === 0 ? "Unknown" : currentUserTweets[0].username;
  const currentUserPicture =currentUserTweets.length === 0 ? "https://www.google.com/imgres?q=%EA%B8%B0%EB%B3%B8%20%ED%94%84%EB%A1%9C%ED%95%84%20&imgurl=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMDExMDFfMTgy%2FMDAxNjA0MjI4ODc1NDMw.Ex906Mv9nnPEZGCh4SREknadZvzMO8LyDzGOHMKPdwAg.ZAmE6pU5lhEdeOUsPdxg8-gOuZrq_ipJ5VhqaViubI4g.JPEG.gambasg%2F%25EC%259C%25A0%25ED%258A%259C%25EB%25B8%258C_%25EA%25B8%25B0%25EB%25B3%25B8%25ED%2594%2584%25EB%25A1%259C%25ED%2595%2584_%25ED%2595%2598%25EB%258A%2598%25EC%2583%2589.jpg%3Ftype%3Dw800&imgrefurl=https%3A%2F%2Fm.blog.naver.com%2Fgambasg%2F222132751279&docid=UwRQoM5gKXrlvM&tbnid=6uo_w__GpOOPDM&vet=12ahUKEwjZl5ThjLSGAxXpb_UHHfuENUUQM3oECCEQAA..i&w=800&h=800&hcb=2&ved=2ahUKEwjZl5ThjLSGAxXpb_UHHfuENUUQM3oECCEQAA" : currentUserTweets[0].picture;
  // TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다.


  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={currentUserPicture} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {currentUsername} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className="tweets__mypage">
        {currentUserTweets.map((tweet) => {return (<Tweet key={tweet.id} tweet={tweet}/>)})}
        {/* TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다. */}
      </ul>
      <Footer />
    </section>
  );
};

export default MyPage;
