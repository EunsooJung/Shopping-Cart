'use strict';
var forms = require('forms');
var fields = forms.fields;
var widgets = forms.widgets;

var checkoutForm = forms.create({
  firstName: fields.string({
    widget: widgets.text({ classes: ['form-control checkout__subject-input'], required: true }),
    cssClasses: { label: ['checkout__input-label'] }
  }),
  middleName: fields.string({
    widget: widgets.text({ classes: ['form-control checkout__subject-input'] }),
    cssClasses: { label: ['checkout__input-label'] }
  }),
  lastName: fields.string({
    widget: widgets.text({ classes: ['form-control checkout__subject-input'], required: true }),
    cssClasses: { label: ['checkout__input-label'] }
  }),
  email: fields.string({
    widget: widgets.text({ classes: ['form-control checkout__subject-input'], required: true }),
    cssClasses: { label: ['checkout__input-label'] }
  }),
  addressLine1: fields.string({
    widget: widgets.text({ classes: ['form-control checkout__subject-input'], required: true }),
    cssClasses: { label: ['checkout__input-label'] }
  }),
  addressLine2: fields.string({
    widget: widgets.text({ classes: ['form-control checkout__subject-input'] }),
    cssClasses: { label: ['checkout__input-label'] }
  }),
  city: fields.string({
    widget: widgets.text({ classes: ['form-control checkout__subject-input'], required: true }),
    cssClasses: { label: ['checkout__input-label'] }
  }),
  state: fields.string({
    widget: widgets.text({ classes: ['form-control checkout__subject-input'], required: true }),
    cssClasses: { label: ['checkout__input-label'] }
  }),
  country: fields.string({
    widget: widgets.text({ classes: ['form-control checkout__subject-input'], required: true }),
    cssClasses: { label: ['checkout__input-label'] }
  }),
  zipCode: fields.string({
    widget: widgets.text({ classes: ['form-control checkout__subject-input'], required: true }),
    cssClasses: { label: ['checkout__input-label'] }
  })
});

module.exports = checkoutForm;