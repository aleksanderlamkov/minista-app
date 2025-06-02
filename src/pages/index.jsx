import {Icon, Image} from "minista";
import { ReactComponent as EyeSVG } from '@/assets/images/eye.svg'

export const metadata = {
  title: 'Home',
  bla: 123,
}

export default () => {
  return (
    <>
      <h1>Home</h1>
      {/*<Image src="/src/assets/images/cat.jpg" />*/}
      <EyeSVG />
      <Icon iconId="alien" />
    </>
  )
}
