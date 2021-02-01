export default {
  defaultOptions: {
    allErrors: true
  },
  keywords: [
    {
      keyword: 'uiwidget',
      type: ['string', 'number'],
      schemaType: 'string',
      code: () => true
    },
    {
      keyword: 'disabled',
      type: ['string', 'number', 'boolean'],
      schemaType: 'boolean',
      code: () => true
    }
  ],
  formats: [
    {
      name: 'test',
      definition: data => {
        const regs = /^[a-z]{6,}/gi
        const state = regs.test(data)
        console.log('state is', state)
        return state
      }
    }
  ]
}
