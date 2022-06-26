import { mount } from '@vue/test-utils';

import MainNav from '@/components/MainNav';

describe('mainNav', () => {
  it('displays company name', () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch('Bobo Careers');
  });

  it('display menu items for navigation', () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      `[data-test='main-nav-list-item']`
    );
    const navigationMenuText = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuText).toEqual([
      'Teams',
      'Location',
      'Life at Bobo',
      'How we hire',
      'Students',
      'Jobs',
    ]);
  });
});
