import styles from './DashboardSection.module.css';

export default function DashboardSection({
  children,
  theme = 'light',
}: {
  children: React.ReactNode;
  theme?: 'light' | 'grey1' | 'grey2' | 'grey3';
}) {
  const getThemeStyle = (): string => {
    switch (theme) {
      case 'grey1':
        return styles.greyPrimary;
      case 'grey2':
        return styles.greySecondary;
      case 'grey3':
        return styles.greyTertiary;
      default:
        return styles.light;
    }
  };

  const currentTheme = getThemeStyle();

  return (
    <section className={`${styles.container} ${currentTheme}`}>
      {children}
    </section>
  );
}
