import { mount } from '@vue/test-utils';

import ActionButton from '@/components/ActionButton';

describe('ActionButton', () => {
  it('renders text', () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: 'Click',
        type: 'primary',
      },
    });
    expect(wrapper.text()).toMatch('Click');
  });

  it('applies one of several styles to button', () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: 'Click',
        type: 'primary',
      },
    });
    const button = wrapper.find('button');
    expect(button.classes('primary')).toBe(true);
  });
});
