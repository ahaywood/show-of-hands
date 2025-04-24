import { Icon } from '@/app/components/Icon'

const Footer = () => {
  const getCurrentYear = () => {
    const date = new Date()
    return date.getFullYear()
  }

  return (
    <footer className="bg-tiffany-blue flex justify-between py-20">
      {/* let side */}
      <div>
      <ul>
        <li>
          <a href="#">
            <Icon id="x" />
          </a>
        </li>
        </ul>
      </div>

      {/* right side */}
      <div className="pr-12">
        <ul className="text-right font-bold text-xl legal">
          <li>
            <a href="/legal/terms">Terms</a>
          </li>
          <li>
            <a href="/legal/privacy">Privacy</a>
          </li>
          <li>
            <a href="/legal/disclaimers">Disclaimers</a>
          </li>
        </ul>
        <p className="text-sm text-white"><em>Copyright &copy; {getCurrentYear()}. <a href="https://ahhacreative.com" className="underline hover:no-underline">Ah Ha Creative, LLC</a>. All Rights Reserved.</em></p>
      </div>
    </footer>
  )
}

export { Footer }