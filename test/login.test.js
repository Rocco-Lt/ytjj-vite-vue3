import { expect } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import Login from '@/views/login/index.vue';

const wrapper = mount(Login)
expect(wrapper.findComponent(Login).exists()).toBe(true)