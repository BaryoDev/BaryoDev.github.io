import DefaultTheme from 'vitepress/theme'
import './custom.css'
import RepoList from '../components/RepoList.vue'
import NpmList from '../components/NpmList.vue'
import NugetList from '../components/NugetList.vue'
import DockerList from '../components/DockerList.vue'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('RepoList', RepoList)
        app.component('NpmList', NpmList)
        app.component('NugetList', NugetList)
        app.component('DockerList', DockerList)
    }
}
