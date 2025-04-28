import { Logo } from '@/app/components/Logo'
import { SocialMedia } from '@/app/components/SocialMedia'

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <footer className="bg-tiffany-blue w-full px-page py-[72px]">
      <div className="grid grid-cols-[400px_300px_1fr_1fr]">
        <div>
          <Logo showBg={false} width={263} height={166} />

          <div className="pb-9 pl-10"><SocialMedia /></div>

          <ul className="pl-10">
            <li><a href="/legal/terms">Terms and Conditions</a></li>
            <li><a href="/legal/privacy">Privacy Policy</a></li>
            <li><a href="/legal/disclaimers">Disclaimers</a></li>
          </ul>
        </div>

        <div className="pt-10">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/case-studies">Case Studies</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="pt-10">
          <h3>Perfect For</h3>
          <ul>
            <li><a href="#">Community Clean Up</a></li>
            <li><a href="#">Animal Shelter Support</a></li>
            <li><a href="#">After School Programs</a></li>
            <li><a href="#">Homeless Shelter</a></li>
            <li><a href="#">Disaster Relief Efforts</a></li>
            <li><a href="#">Senior Citizen Support</a></li>
            <li><a href="#">Community Garden Maintenance</a></li>
            <li><a href="#">Sports Events</a></li>
            <li><a href="#">School Field Trips</a></li>
            <li><a href="#">Museum and Art Gallery</a></li>
            <li><a href="#">Environmental Conservation</a></li>
            <li><a href="#">Food Drives and Pantry Assistance</a></li>
            <li><a href="#">Cultural Festivals and Celebrations</a></li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div className="pt-10">
          <h3>Migrating</h3>
          <ul>
            <li><a href="#">Sign Up Genius vs Show of Hands</a></li>
            <li><a href="#">Zelos vs Show of Hands</a></li>
            <li><a href="#">Signup.com vs Show of Hands</a></li>
            <li><a href="#">Volunteer Hub vs Show of Hands</a></li>
            <li><a href="#">Better Impact vs Show of Hands</a></li>
            <li><a href="#">VolunteerLocal vs Show of Hands</a></li>
            <li><a href="#">VOMO vs Show of Hands</a></li>
            <li><a href="#">Shift vs Show of Hands</a></li>
            <li><a href="#">Give Pulse vs Show of Hands</a></li>
            <li><a href="#">Track It Forward vs Show of Hands</a></li>
            <li><a href="#">Time Counts vs Show of Hands</a></li>
            <li><a href="#">Volgistics vs Show of Hands</a></li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-sm italic text-white">
          Copyright&copy; {getCurrentYear()}. <a href="https://ahhacreative.com" target="_blank" rel="noopener noreferrer">Ah Ha Creative, LLC</a>. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export { Footer }