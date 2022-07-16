import { mount } from '@vue/test-utils';

import Subnav from '@/components/Subnav';

describe('Subnav', () => {
  describe('When user is on job page', () => {
    it('desplays job count', () => {
      const wrapper = mount(Subnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultPage: true,
          };
        },
      });
      const jobCount = wrapper.find(`[data-test='job-count']`);
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe('When the user is not on job page', () => {
    it('does NOT diaplay the count', () => {
      const wrapper = mount(Subnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultPage: false,
          };
        },
      });
      const jobCount = wrapper.find(`[data-test='job-count']`);
      expect(jobCount.exists()).toBe(false);
    });
  });
});
