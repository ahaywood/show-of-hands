import { Constants } from "@/app/shared/Constants"
import { Icon } from "@/app/components/Icon"

const SocialMedia = () => {
  return (
    <ul className="flex gap-x-8 items-center social-media">
      <li>
        <a href={Constants.TWITTER} target="_blank" rel="noopener noreferrer"><Icon id="x" /></a>
      </li>
      <li>
        <a href={Constants.INSTAGRAM} target="_blank" rel="noopener noreferrer"><Icon id="instagram" /></a>
      </li>
      <li>
        <a href={Constants.THREADS} target="_blank" rel="noopener noreferrer"><Icon id="threads" /></a>
      </li>
      <li>
        <a href={Constants.LINKEDIN} target="_blank" rel="noopener noreferrer"><Icon id="linkedin" /></a>
      </li>
    </ul>
  )
}

export { SocialMedia }