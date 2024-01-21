import React from 'react';
import './yachtclub.css';

const YachtClubBody = () => {
  return (
    <section id='YachtClub'>
        <div className='ClubParent1'>
                <div className='ClubChild1'>
                    <h1 className='Child1H1'>ABOUT THE CLUB</h1>
                    <h3 className='Child1H3'>The mission of our Yacht Club is to promote yachting, competitive sailing and an exceptional social experience.</h3>
                </div>
                <div className='ClubChild2'>
                    <p className='Child2P'>Our Club's location, facilities, programs and yachting assets make it the first choice for social and recreational enjoyment. Our Yacht Club was founded with the main goal of offering our valued clients and members an inviting boating environment. We look forward to welcoming you at the club and sharing sailing stories.</p>
                </div>
        </div>
        <div className='ClubParent2'>
                <div className='ClubChild3'></div>
                <div className='ClubChild4'>
                    <h1 className='Child4H1'>MEMBERSHIP</h1>
                    <p className='Child4P2'>Thank you for considering membership at TYC. New members are always welcome! You are encouraged to apply regardless of your sailing ability, experience, background, and whether or not you own a boat. The joining process is simple and our application form can be downloaded below. Please consider one of our two benefit programs. For general membership enquiries please contact: tyc@TreasureClub.com</p>
                    <a className='MemberButton' href='/Membership'>BECOME A MEMBER</a>
                </div>
        </div>
    </section>
  )
}

export default YachtClubBody;