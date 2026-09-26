import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const highlights = [
  {title: '📦 FreeKit', desc: '.NET 扩展库、FreeSql 存储和模块化实践。', to: '/docs/dotnetcore/freekit/', cta: '阅读文档 →'},
  {title: '🧩 Lin CMS', desc: '内容管理系统框架的入门、核心概念和开发指南。', to: '/docs/dotnetcore/lin-cms/', cta: '查看 Lin CMS →'},
  {title: '⚡ .NET Core 示例', desc: '常见开发场景、框架集成和部署示例。', to: '/docs/dotnetcore/examples/', cta: '浏览示例 →'},
  {title: '🐳 Docker', desc: '容器、数据库、中间件与部署工具的使用记录。', to: '/docs/dotnetcore/docker/', cta: '查看 Docker →'},
  {title: '📝 技术分享', desc: '开发经验、开源工具和技术问题记录。', to: '/docs/blogs/', cta: '阅读博客 →'},
  {title: '🧭 导航与关于', desc: '常用站点与工具，以及作者介绍。', to: '/docs/navigation/', cta: '打开导航 →'},
];

const techBadges = [
  {label: '.NET', color: '#512bd4'},
  {label: 'FreeKit', color: '#d36f08'},
  {label: 'FreeSql', color: '#e05d34'},
  {label: 'Lin CMS', color: '#0b6479'},
  {label: 'Docker', color: '#2980b9'},
];

export default function Home(): ReactNode {
  return (
    <Layout title=".NET 开发者指北" description="FreeKit、Lin CMS、.NET Core 示例、Docker 与技术分享">
      <main className={styles.page}>
        <section className={styles.heroSection}>
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            <p className={styles.kicker}>IGEEKFAN DOCUMENTATION</p>
            <Heading as="h1" className={styles.title}>.NET 开发者指北</Heading>
            <p className={styles.subtitle}>FreeKit · Lin CMS · .NET Core · Docker · 技术分享</p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryBtn} to="/docs/">浏览文档</Link>
              <Link className={styles.secondaryBtn} to="/docs/dotnetcore/freekit/">从 FreeKit 开始</Link>
            </div>
            <div className={styles.badgeRow}>
              {techBadges.map((badge) => (
                <span key={badge.label} className={styles.badge} style={{background: badge.color}}>{badge.label}</span>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.cardsSection} aria-label="文档分类">
          <div className={styles.cardsGrid}>
            {highlights.map((item) => (
              <article className={styles.card} key={item.title}>
                <Heading as="h2" className={styles.cardTitle}>{item.title}</Heading>
                <p className={styles.cardDesc}>{item.desc}</p>
                <Link className={styles.cardLink} to={item.to}>{item.cta}</Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
