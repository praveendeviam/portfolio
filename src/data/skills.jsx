import {
  SiSpringboot, SiApachenifi, SiMongodb, SiPostgresql,
  SiApachekafka, SiGooglepubsub, SiReact, SiJavascript,
  SiGraphql, SiKeycloak, SiElastic, SiGrafana, SiPrometheus,
  SiGooglecloud, SiDocker, SiGit,
} from 'react-icons/si'
import { FiActivity, FiCloud, FiServer, FiWind } from 'react-icons/fi'

export const SKILL_GROUPS = [
  {
    title: 'Backend & Orchestration',
    size:  'lg',
    items: [
      { name: 'Spring Boot',       icon: <SiSpringboot />, color: '#6db33f' },
      { name: 'Apache NiFi',       icon: <SiApachenifi />, color: '#728e9b' },
      { name: 'Apache Camel',      icon: <FiWind />,       color: '#e0410e' },
      { name: 'Netflix Conductor', icon: <FiActivity />,   color: '#e50914' },
    ],
  },
  {
    title: 'Data, Messaging & Streaming',
    size:  'md',
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql />,   color: '#336791' },
      { name: 'MongoDB',    icon: <SiMongodb />,      color: '#4db33d' },
      { name: 'Kafka',      icon: <SiApachekafka />,  color: '#a0a0a0' },
      { name: 'Pub/Sub',    icon: <SiGooglepubsub />, color: '#4285f4' },
      { name: 'ksqlDB',     icon: <FiCloud />,        color: '#5c6bc0' },
    ],
  },
  {
    title: 'API & Security',
    size:  'md',
    items: [
      { name: 'REST',     icon: <FiCloud />,      color: '#888'    },
      { name: 'GraphQL',  icon: <SiGraphql />,    color: '#e10098' },
      { name: 'Keycloak', icon: <SiKeycloak />,   color: '#4d9ff3' },
    ],
  },
  {
    title: 'Observability',
    size:  'md',
    items: [
      { name: 'ELK Stack',  icon: <SiElastic />,    color: '#00bfb3' },
      { name: 'Grafana',    icon: <SiGrafana />,    color: '#f46800' },
      { name: 'Prometheus', icon: <SiPrometheus />, color: '#e6522c' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    size:  'md',
    items: [
      { name: 'Azure',  icon: <FiServer />,         color: '#0089d6' },
      { name: 'GCP',    icon: <SiGooglecloud />,    color: '#4285f4' },
      { name: 'Docker', icon: <SiDocker />,         color: '#2496ed' },
      { name: 'Git',    icon: <SiGit />,            color: '#f05032' },
    ],
  },
  {
    title: 'Frontend',
    size:  'sm',
    items: [
      { name: 'React',      icon: <SiReact />,      color: '#61dafb' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
    ],
  },
]
