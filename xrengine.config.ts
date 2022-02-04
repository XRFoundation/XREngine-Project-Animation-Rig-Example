import type { ProjectConfigInterface } from '@xrengine/projects/ProjectConfigInterface'

const config: ProjectConfigInterface = {
  routes: {
    '/ikrig': {
      component: () => import('./ikrig')
    }
  },
  services: undefined,
  databaseSeed: undefined
}

export default config
