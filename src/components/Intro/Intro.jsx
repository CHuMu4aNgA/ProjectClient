import { Section, Text } from "../"
import cls from './Intro.module.scss'
import { ReactComponent as ArhSvg} from '../../assets/gerb.svg'


export const Intro = () => {
    return (
        <Section className={cls.intro}>
            <div className={cls.introInner}>
                <div className={cls.title}>
                    <ArhSvg />
                    <Text color='white' title='Архангельск' size='xl' align='center' />
                </div>
                <Text color='gray' title='Был основан в 1584 году' size='l' align='center'/>
            </div>
        </Section>
    )
}