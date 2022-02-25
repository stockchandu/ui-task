import { mount } from '@vue/test-utils'
import EmployeeSearch from '@/components/EmployeeSearch.vue'

describe('EmployeeSearch.vue',  () => {
    it('it should renders input type text', () => {
        const wrapper = mount(EmployeeSearch);
        const textInput = wrapper.find('input[type="text"]');
         textInput.setValue('some value');
        expect(wrapper.find('input[type="text"]').element.value).toBe('some value');
    })
})


