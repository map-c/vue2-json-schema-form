import widgetMap from '../widget'

export function getWidget(schema) {
  const uiCommon = schema.uiwidget || ''
  if (uiCommon && typeof uiCommon === 'string') {
    return widgetMap[uiCommon]
  }
  return uiCommon
}
