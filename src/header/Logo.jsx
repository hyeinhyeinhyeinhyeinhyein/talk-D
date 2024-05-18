import React from 'react';

/*로고 이미지를 클릭하면 웰컴 페이지로 이동*/
export function Logo(){
    const handleclicklogo = () => {
        window.location.href = "";  
    };


    return(
        <div className='logo' style={{ margin: '60px 0px 20px 0px' }} onClick={handleclicklogo}>
            <svg width="134" height="69" viewBox="0 0 134 69" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="99.5" cy="34.5" r="34.5" fill="#FDEDBF"/>
            <path d="M15.0682 24.8182V28.2273H1.5V24.8182H15.0682ZM5.45455 18.5455H9.47727V43.5C9.47727 44.6364 9.64205 45.4886 9.97159 46.0568C10.3125 46.6136 10.7443 46.9886 11.267 47.1818C11.8011 47.3636 12.3636 47.4545 12.9545 47.4545C13.3977 47.4545 13.7614 47.4318 14.0455 47.3864C14.3295 47.3295 14.5568 47.2841 14.7273 47.25L15.5455 50.8636C15.2727 50.9659 14.892 51.0682 14.4034 51.1705C13.9148 51.2841 13.2955 51.3409 12.5455 51.3409C11.4091 51.3409 10.2955 51.0966 9.20455 50.608C8.125 50.1193 7.22727 49.375 6.51136 48.375C5.80682 47.375 5.45455 46.1136 5.45455 44.5909V18.5455ZM28.8239 51.6136C27.1648 51.6136 25.6591 51.3011 24.3068 50.6761C22.9545 50.0398 21.8807 49.125 21.0852 47.9318C20.2898 46.7273 19.892 45.2727 19.892 43.5682C19.892 42.0682 20.1875 40.8523 20.7784 39.9205C21.3693 38.9773 22.1591 38.2386 23.1477 37.7045C24.1364 37.1705 25.2273 36.7727 26.4205 36.5114C27.625 36.2386 28.8352 36.0227 30.0511 35.8636C31.642 35.6591 32.9318 35.5057 33.9205 35.4034C34.9205 35.2898 35.6477 35.1023 36.1023 34.8409C36.5682 34.5795 36.8011 34.125 36.8011 33.4773V33.3409C36.8011 31.6591 36.3409 30.3523 35.4205 29.4205C34.5114 28.4886 33.1307 28.0227 31.2784 28.0227C29.358 28.0227 27.8523 28.4432 26.7614 29.2841C25.6705 30.125 24.9034 31.0227 24.4602 31.9773L20.642 30.6136C21.3239 29.0227 22.233 27.7841 23.3693 26.8977C24.517 26 25.767 25.375 27.1193 25.0227C28.483 24.6591 29.8239 24.4773 31.142 24.4773C31.983 24.4773 32.9489 24.5795 34.0398 24.7841C35.142 24.9773 36.2045 25.3807 37.2273 25.9943C38.2614 26.608 39.1193 27.5341 39.8011 28.7727C40.483 30.0114 40.8239 31.6705 40.8239 33.75V51H36.8011V47.4545H36.5966C36.3239 48.0227 35.8693 48.6307 35.233 49.2784C34.5966 49.9261 33.75 50.4773 32.6932 50.9318C31.6364 51.3864 30.3466 51.6136 28.8239 51.6136ZM29.4375 48C31.0284 48 32.3693 47.6875 33.4602 47.0625C34.5625 46.4375 35.392 45.6307 35.9489 44.642C36.517 43.6534 36.8011 42.6136 36.8011 41.5227V37.8409C36.6307 38.0455 36.2557 38.233 35.6761 38.4034C35.108 38.5625 34.4489 38.7045 33.6989 38.8295C32.9602 38.9432 32.2386 39.0455 31.5341 39.1364C30.8409 39.2159 30.2784 39.2841 29.8466 39.3409C28.8011 39.4773 27.8239 39.6989 26.9148 40.0057C26.017 40.3011 25.2898 40.75 24.733 41.3523C24.1875 41.9432 23.9148 42.75 23.9148 43.7727C23.9148 45.1705 24.4318 46.2273 25.4659 46.9432C26.5114 47.6477 27.8352 48 29.4375 48ZM52.1889 16.0909V51H48.1662V16.0909H52.1889ZM63.3068 41.4545L63.2386 36.4773H64.0568L75.5114 24.8182H80.4886L68.2841 37.1591H67.9432L63.3068 41.4545ZM59.5568 51V16.0909H63.5795V51H59.5568ZM76.1932 51L65.9659 38.0455L68.8295 35.25L81.3068 51H76.1932Z" fill="black"/>
            <path d="M88.598 51.2727C87.7571 51.2727 87.0355 50.9716 86.4332 50.3693C85.831 49.767 85.5298 49.0455 85.5298 48.2045C85.5298 47.3636 85.831 46.642 86.4332 46.0398C87.0355 45.4375 87.7571 45.1364 88.598 45.1364C89.4389 45.1364 90.1605 45.4375 90.7628 46.0398C91.3651 46.642 91.6662 47.3636 91.6662 48.2045C91.6662 48.7614 91.5241 49.2727 91.2401 49.7386C90.9673 50.2045 90.598 50.5795 90.1321 50.8636C89.6776 51.1364 89.1662 51.2727 88.598 51.2727ZM88.598 31.8409C87.7571 31.8409 87.0355 31.5398 86.4332 30.9375C85.831 30.3352 85.5298 29.6136 85.5298 28.7727C85.5298 27.9318 85.831 27.2102 86.4332 26.608C87.0355 26.0057 87.7571 25.7045 88.598 25.7045C89.4389 25.7045 90.1605 26.0057 90.7628 26.608C91.3651 27.2102 91.6662 27.9318 91.6662 28.7727C91.6662 29.3295 91.5241 29.8409 91.2401 30.3068C90.9673 30.7727 90.598 31.1477 90.1321 31.4318C89.6776 31.7045 89.1662 31.8409 88.598 31.8409ZM110.203 51H99.4304V16.0909H110.68C114.067 16.0909 116.964 16.7898 119.374 18.1875C121.783 19.5739 123.629 21.5682 124.913 24.1705C126.197 26.7614 126.839 29.8636 126.839 33.4773C126.839 37.1136 126.192 40.2443 124.896 42.8693C123.601 45.483 121.714 47.4943 119.237 48.9034C116.76 50.3011 113.749 51 110.203 51ZM103.658 47.25H109.93C112.817 47.25 115.209 46.6932 117.107 45.5795C119.004 44.4659 120.419 42.8807 121.351 40.8239C122.283 38.767 122.749 36.3182 122.749 33.4773C122.749 30.6591 122.288 28.233 121.368 26.1989C120.447 24.1534 119.072 22.5852 117.243 21.4943C115.413 20.392 113.135 19.8409 110.408 19.8409H103.658V47.25Z" fill="#FD7500"/>
            </svg>
        </div>
    );
}