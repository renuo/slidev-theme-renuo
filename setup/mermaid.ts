import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
    return {
        theme: 'base',
        themeVariables: {
            // General theme variables
            noteBkgColor: '#27D69F',
            noteTextColor: '#F3EFF5cc',
            noteBorderColor: '#404551',

            // Sequence diagram variables
            actorBkg: '#27D69F',
            actorBorder: '#25CB97',
            actorTextColor: '#343a40',
            actorLineColor: '#343a40',
            signalColor: '#343a40',
            signalTextColor: '#343a40',
        }
    }
})
