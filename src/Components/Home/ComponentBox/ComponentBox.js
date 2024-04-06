import React , { useState , useEffect} from 'react';
import './ComponentBox.scss';
import { Content } from '../Content';
import { ReactCompareSlider , ReactCompareSliderImage } from 'react-compare-slider';

const ComponentBox = () => {

  const [componentTab , setComponentTab] = useState('Tab-1');

  const [userChatData , setUserChatData] = useState(Content.usersChat[0])
  const [totalUserData , setTotalUserData] = useState(Content.usersChat);
  const [localMessage  , setLocalMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchValue ,setSearchValue] = useState();
  const [messageStore , setMessageStore] = useState();
  const [cardToggle , setCardToggle] = useState(false);
  const [cardNumberVal , setCardNumberVal] = useState('');
  const [cardNameVal , setCardNameVal] = useState('');
  const [cardMonthVal , setCardMonthVal] = useState('');
  const [cardYearVal , setCardYearVal] = useState('');
  const [cardCVVal , setCardCVVal] = useState('')

  useEffect(() => {
    setTotalUserData(Content.usersChat)
  }, [])
  

  const handlerSearch = (value) => {
    setSearchValue(value);
    if (value === "" || value === null) {        
        setTotalUserData(Content.usersChat)       
    } else {
      const filteredData =  Content.usersChat.filter((item) => item.email.toLowerCase().includes(value.toLowerCase())
    );
      setTotalUserData(filteredData);
    }
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };
  
  const handleLocalStorage = () => {
    const getItem = JSON.parse(localStorage.getItem('fromSelf'));
    setLocalMessage(getItem)
    console.log(getItem , "getytem")
  }

  const handleAddMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage ]);
      setNewMessage('');
      localStorage.setItem('fromSelf' , JSON.stringify(messages));
      handleLocalStorage();
    } 
  };

  
  const numbersOnlyInput = (e) => {
    var key = e.key;
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      e.preventDefault();
    }
    else {
      console.log("You pressed a key: " + key);
    }
  }


  const handleInputStepper = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, '');
    let formattedValue = '';
    for (let i = 0; i < numericValue.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += '-';
      }
      formattedValue += numericValue[i];
    }
    event.target.value = formattedValue;
    setCardNumberVal(formattedValue)
  };

  const handleInputName = (data) => {
    setCardNameVal(data.target.value);
    if(cardNameVal && cardNumberVal && cardMonthVal && cardYearVal) {
      setCardToggle(true)
    }else {
      setCardToggle(false)
    }
  }

  const handleInputMonth = (data) => {
    setCardMonthVal(data.target.value);
    if(cardNameVal && cardNumberVal && cardMonthVal && cardYearVal) {
      setCardToggle(true)
    }else {
      setCardToggle(false)
    }
  }

  const handleInputYear = (data) => {
    setCardYearVal(data.target.value);
    if(cardNameVal && cardNumberVal && cardMonthVal && cardYearVal) {
      setCardToggle(true)
    }else {
      setCardToggle(false)
    }
  }

  const handleInputCvv = (data) => {
    setCardCVVal(data.target.value);
  }


  return (
    <div className="ComponentBox">
      <div className="container">
          <div className="section-10-head mb-10">
            <h2 className='text-white font-Manrope text-5xl font-bold leading-tight text-center'>Some of My Best <span>Components</span></h2>
          </div>
          <div className="bottom-sec-10-tabs-sec">
            {/* <div className="sec-10-tabs-inner ">
              <div className="tabs-pills-section-10 flex items-center justify-center gap-8">
                <div className="similar-pills pill-sec-10-1">
                  <button type="button" onClick={() => setComponentTab('Tab-1')} className={`${componentTab === 'Tab-1' ? 'bg-darkgreen text-white' : 'bg-white text-homeblack'} duration-500 rounded-full text-base font-Manrope font-bold px-10 py-3 outline-none shadow-none flex items-center gap-3`}>
                    <div className="button-iconer-chat">
                      <i class="bi bi-chat text-xl"></i>
                    </div>
                    <p className='m-0'>Basic Chat</p>
                  </button>
                </div>
                <div className="similar-pills pill-sec-10-2">
                <button type="button" onClick={() => setComponentTab('Tab-2')} className={`${componentTab === 'Tab-2' ? 'bg-darkgreen text-white' : 'bg-white text-homeblack'} duration-500 rounded-full text-base font-Manrope font-bold px-10 py-3 outline-none shadow-none flex items-center gap-3`}>
                    <div className="button-iconer-chat">
                      <i class="bi bi-copy text-xl"></i>
                    </div>
                    <p className='m-0'>Comparision</p>
                  </button>
                </div>
                <div className="similar-pills pill-sec-10-3">
                  <button type="button" onClick={() => setComponentTab('Tab-3')} className={`${componentTab === 'Tab-3' ? 'bg-darkgreen' : 'bg-white'} duration-500 rounded-full text-base font-Manrope font-bold text-homeblack px-10 py-3 outline-none shadow-none`}>Hover Box</button>
                </div>
              </div>
            </div> */}
            <div className="top-tabs-outer-sec p-2 rounded-full w-fit bg-white mx-auto">
              <div className={`inner-tabs-sec relative overflow-hidden ${componentTab === 'Tab-1' ? 'tab-1-active' : ''} ${componentTab === 'Tab-2' ? 'tab-2-active' : ''} ${componentTab === 'Tab-3' ? 'tab-3-active' : ''}`}>
                <ul className='flex items-center justify-between gap-[20px]'>
                  <li>
                    <button type="button" onClick={() => setComponentTab('Tab-1')} className={`text-homeblack duration-500 rounded-full text-base font-Manrope font-bold px-10 py-3 w-[220px] outline-none shadow-none flex items-center gap-3`}>
                      <div className="button-iconer-chat">
                      <i class="bi bi-credit-card text-xl"></i>
                      </div>
                      <p className='m-0'>Card Entry</p>
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={() => setComponentTab('Tab-2')} className={`text-homeblack duration-500 rounded-full text-base font-Manrope font-bold px-10 py-3 w-[220px] outline-none shadow-none flex items-center gap-3`}>
                      <div className="button-iconer-chat">
                        <i class="bi bi-copy text-xl"></i>
                      </div>
                      <p className='m-0'>Comparision</p>
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={() => setComponentTab('Tab-3')} className={`text-homeblack duration-500 rounded-full text-base font-Manrope font-bold px-10 py-3 w-[220px] outline-none shadow-none flex items-center gap-3`}>
                      <div className="button-iconer-chat">
                        <i class="bi bi-chat text-xl"></i>
                      </div>
                      <p className='m-0'>Basic Chat</p>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sec-10-tabs-content-section mt-10">
              {componentTab === 'Tab-3' ? 
                  <div className="chat-room-section rounded-3xl w-11/12 mx-auto overflow-hidden">
                    <div className="chat-room-section-inner border rounded-3xl shadow-xl bg-white">
                      <div className="grid grid-cols-12">
                        <div className="col-span-4 border-r border-r-gray-200">
                          <div className="left-column-admin-sec-fixed-state relative">
                            <div className="admin-secfixed-inner bg-white rounded-b-3xl shadow-2xl py-3 px-3">
                              <div className="admin-user-det-sec flex items-center gap-4">
                                <div className="admin-image w-fit relative">
                                  <img className='w-[60px] h-[60px] rounded-full' src={require('../../../images/avatars/brian-hughes.jpg')} alt="" />
                                  <div className="dot bg-green-400 h-3 w-3 rounded-full absolute bottom-0 right-1"></div>
                                </div>
                                <div className="admin-details">
                                  <p className='font-Manrope text-lg'>Spidey_01</p>
                                  <p className='text-sm font-Manrope text-gray-500'>Admin@parker.com</p>
                                </div> 
                                {/* <div className="add-user-section absolute top-5 right-5 ">
                                  <button className='relative group w-10 h-10 flex items-center justify-center rounded-full bg-greenYellow' onClick={addUser}>
                                    <i className='bi bi-person-add text-homeblack'></i> 
                                  </button>                               
                                </div> */}
                              </div> 
                              <div className="bottom-search-bar relative mt-4">
                                <input type="text" onChange={(e) => {handlerSearch(e.target.value) ; setSearchValue(e.target.value)}} placeholder='Search People Here..'  className='outline-none shadow-none w-full px-4 py-2 rounded-xl border-gray-300 font-Manrope font-semibold'/>
                                <div className="searchicon absolute top-2 right-4">
                                  <i class="bi bi-search"></i>
                                </div>
                              </div>                         
                            </div>                           
                          </div>
                          <div className="left-column-user h-[350px] overflow-hidden overflow-y-auto">
                              {totalUserData.map((items , index) => {
                                return(
                                  <div className="user-namer-card px-4 py-4 border-b border-b-gray-200 flex items-center gap-5 bg-white hover:bg-gray-200 duration-300 cursor-pointer" onClick={() => setUserChatData(items)} key={index}>
                                    <div className="userimage-sec">
                                      <img className='w-10 h-10 rounded-full' src={items.image} alt="" />
                                    </div>
                                    <div className="user-details">
                                      <div className="useremail">
                                        <p className='font-Manrope text-sm'>{items.email}</p>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })}
                          </div>
                        </div>
                        <div className="col-span-8">
                            <div className="right-side-inner-section h-full flex flex-col justify-between">
                              <div className="right-side-column-user-header py-3 px-4 border-b border-b-gray-300">
                                <div className="right-side-top-bar">
                                  <div className="top-user-section-details flex items-center gap-4">
                                    <div className="userimage w-fit relative">
                                      <img src={userChatData.image} className='w-16 h-16 rounded-full' alt="" />
                                      <div className={`dot h-3 w-3 rounded-full absolute bottom-1 outline outline-white right-1 ${userChatData.lastSeen === "Online" ? 'bg-green-400' : 'bg-orange-400'}`}></div>
                                    </div>
                                    <div className="user-namer-section">
                                      <p className='font-Manrope text-lg '>{userChatData.email}</p>
                                      <p className='font-Manrope text-gray-500 text-sm'>{userChatData.lastSeen}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="right-side-middel-section">
                                <div className="message-section-bottom w-full flex items-end overflow-hidden">
                                  <div className="usermessages h-[350px] px-4 overflow-y-scroll py-2 w-full">
                                      <ul className='mt-auto'>
                                          {localMessage.map((message, index) => (
                                            <li key={index} className='mt-2'>
                                              <div className="messages-sec w-fit ml-auto text-end">
                                                <p className='font-Manrope text-base px-4 py-2 rounded-full bg-red-400 text-white'>{message}</p>
                                              </div> 
                                            </li>
                                          ))}
                                      </ul>
                                                                  
                                  </div>
                                </div>
                              </div>
                              <div className="right-side-bottom-searcher px-4 py-3 border-t border-gray-200">
                                <div className="bottom-search-inner">
                                  <div className="message-input relative w-full">
                                    <input type="text" placeholder='Send Message ...' value={newMessage} onChange={handleInputChange} className='px-4 py-2 w-full font-Manrope border-homeblack border text-base rounded-full'/>
                                    <div className="send-icon absolute top-[5px] right-[6px]">
                                      <button type="button" onClick={handleAddMessage} className='w-8 h-8 grid place-items-center rounded-full '><i className="text-white bi bi-send"></i></button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
              : null}
              {componentTab === 'Tab-2' ? 
                  <div className="sec-10-tab-1-content">
                    <div className="tab-1-content-inner overflow-hidden">
                        <ReactCompareSlider
                          boundsPadding={0}
                          itemOne={<ReactCompareSliderImage alt="Image one" src={require('../../../images/japan-old-compare.png')}/>}
                          itemTwo={<ReactCompareSliderImage alt="Image two" src={require('../../../images/japan-new-compare.png')}/>}
                          keyboardIncrement="5%"
                          position={50}
                          style={{
                            height: '596px',
                            width: '90%',
                            borderRadius: '20px',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                          }}
                        />
                    </div>
                  </div>
              : null}
              {componentTab === 'Tab-1' ? 
                  <div className="charts-section rounded-3xl overflow-hidden bg-white w-11/12 mx-auto ">
                    <div className="charts-inner-section">
                        <div className="grid grid-cols-9">
                          <div className="col-span-3 left-card-form-section">
                            <div className="card-form-inner p-8 border-r border-homeblack border-opacity-20">
                              <form>
                                <div className="card-form-inner flex flex-col gap-7">
                                  <div className="card-name-section card-input-blocks">
                                    <div className="card-name-lable mb-1">
                                      <p className='font-Manrope text-base font-semibold text-homeblack'>Name On Card</p>
                                    </div>
                                    <div className="card-name-input">
                                      <input type="text" placeholder='Example' onKeyUp={(e) => handleInputName(e)} name="" className='w-full outline-none border border-homeblack border-opacity-40 rounded-lg font-bold text-xl font-Manrope py-2 px-5 break-words' maxLength={22} id=""  />
                                    </div>
                                  </div>
                                  <div className="card-number-section card-input-blocks">
                                    <div className="card-name-lable mb-1">
                                      <p className='font-Manrope text-base font-semibold text-homeblack'>Card Number</p>
                                    </div>
                                    <div className="card-name-input">
                                      <input placeholder='4444XXXX4444XXXX' onChange={handleInputStepper} type="text" name="" className='w-full outline-none border border-homeblack border-opacity-40 rounded-lg font-bold text-xl font-Manrope py-2 px-5' id="" maxLength={19} minLength={19} />
                                    </div>
                                  </div>
                                  <div className="card-date-section card-input-blocks">
                                    <div className="card-name-lable mb-1">
                                      <p className='font-Manrope text-base font-semibold text-homeblack'>Expiry Date</p>
                                    </div>
                                    <div className="splitted-date-input flex items-center gap-3">
                                      <div className="card-name-input">
                                        <input onKeyPress={(e) => numbersOnlyInput(e)} onKeyUp={(e) => handleInputMonth(e)} placeholder='MM' type="text" name="" className='w-full outline-none border border-homeblack border-opacity-40 rounded-lg font-bold text-xl font-Manrope py-2 px-5' id="" maxLength={2} minLength={2} />
                                      </div>
                                      <div className="card-name-input">
                                        <input onKeyPress={(e) => numbersOnlyInput(e)} onKeyUp={(e) => handleInputYear(e)} placeholder='YY' type="text" name="" className='w-full outline-none border border-homeblack border-opacity-40 rounded-lg font-bold text-xl font-Manrope py-2 px-5' id="" maxLength={2} minLength={2} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card-cvv-section card-input-blocks">
                                    <div className="card-name-lable mb-1">
                                      <p className='font-Manrope text-base font-semibold text-homeblack'>CVV</p>
                                    </div>
                                    <div className="card-name-input">
                                      <input onKeyPress={(e) => numbersOnlyInput(e)} onKeyUp={(e) => handleInputCvv(e)} placeholder='123' type="text" name="" className='w-full outline-none border border-homeblack border-opacity-40 rounded-lg font-bold text-xl font-Manrope py-2 px-5' id="" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxLength={3} minLength={3} />
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="col-span-6 right-card-flipper-section">
                            <div className="card-fliper h-full flex items-center justify-center relative">
                              <div className="card-flipper-inner">
                                <div className={`flip-card ${cardToggle ? 'activeCard' : ''}`}>
                                  <div className="flip-card-inner ">
                                    <div className="flip-card-front">
                                      <div className="inner-card-details flex flex-col justify-between h-full">
                                        <div className="top-card-images-sec flex items-center justify-between">
                                          <div className="top-cardtype-image flex items-center gap-2">
                                            <div className="master-image-logo">
                                              <img src={require('../../../images/master-card.png')} className='w-12' alt="" />
                                            </div>
                                            <div className="master-card-text">
                                              <p className='font-Manrope text-white'>Master Card</p>
                                            </div>
                                          </div>
                                          <div className="right-chipper-sec">
                                            <img src={require('../../../images/card-chip.png')} className='w-16' alt="" />
                                          </div>
                                        </div>
                                        <div className="card-bottom-section-details">
                                          <div className="card-number-disp">
                                            <p className="text-white font-Manrope">Card Number</p>
                                            <p className='font-Manrope font-bold text-white text-[22px]'>{cardNumberVal ? cardNumberVal : '4242-XXXX-XXXX-2424'}</p>
                                          </div> 
                                          <div className="card-date-name-displayer flex items-center justify-between mt-4">
                                            <div className="left-name-displayer w-3/4">
                                              <p className="font-Manrope text-white text-xl break-words">{cardNameVal ? cardNameVal : 'Name on Card'}</p>
                                            </div>
                                            <div className="total-date-disp w-1/4">
                                                <p className='text-white font-Manrope text-xl'>{cardMonthVal ? cardMonthVal : 'MM'} / {cardYearVal ? cardYearVal : 'YY'}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flip-card-back relative">
                                      <div className="back-cvv-section">
                                        <div className="white-strip w-full h-14 bg-white absolute top-14 left-0 shadow-xl flex items-center justify-end px-5">
                                          <div className="cvv-outer-para bg-homeblack py-2 px-5 rounded-full w-fit ">
                                            <p className="font-Manrope font-bold text-xl text-white">{cardCVVal ? cardCVVal : 'CVV'}</p>
                                          </div>
                                        </div>
                                        <div className="bottom-cardtype-image flex items-center gap-2 absolute right-5 bottom-5">
                                          <div className="master-image-logo">
                                            <img src={require('../../../images/master-card.png')} className='w-12' alt="" />
                                          </div>
                                          <div className="master-card-text">
                                            <p className='font-Manrope text-white'>Master Card</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bottom-buttons-part flex items-center justify-between absolute w-full bottom-7 px-10 left-0">
                                  <div className="left-toggle-button">
                                    <button type="button" onClick={() => setCardToggle(false)}>
                                      <div className="left-button-inner flex items-center gap-3">
                                        <div className="left-icon-btn">
                                          <i class="bi bi-arrow-left text-xl text-homeblack"></i>
                                        </div>
                                        <div className="left-text-btn">
                                          <p className="font-Manrope font-bold text-xl text-homeblack">Front View</p>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                  <div className="right-toggle-button">
                                    <button type="button" onClick={() => setCardToggle(true)}>
                                      <div className="right-button-inner flex items-center gap-3">
                                        <div className="right-text-btn">
                                          <p className="font-Manrope font-bold text-xl text-homeblack">Back View</p>
                                        </div>
                                        <div className="right-icon-btn">
                                          <i class="bi bi-arrow-right text-xl text-homeblack"></i>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
              : null}
            </div> 
          </div>
      </div>
    </div>
  );
}

ComponentBox.propTypes = {};

ComponentBox.defaultProps = {};

export default ComponentBox;
