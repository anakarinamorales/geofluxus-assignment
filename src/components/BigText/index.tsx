import { Typography } from 'antd';
import styles from './BigText.module.css';

const { Text } = Typography;

const BigText = ({ children, ...props }: { children: React.ReactNode }) => {
    return (
        <Text {...props} className={styles.text}>
            {children}
        </Text>
    );
};

export default BigText;
