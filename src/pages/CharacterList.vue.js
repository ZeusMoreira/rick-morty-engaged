import { ref, watch, computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { GET_CHARACTERS } from '../graphql/queries';
import CharacterCard from '../components/CharacterCard.vue';
import Pagination from '../components/Pagination.vue';
function debounce(fn, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}
const page = ref(1);
const search = ref('');
const { result, loading, refetch } = useQuery(GET_CHARACTERS, {
    page: page.value,
    name: search.value
});
const debouncedSearch = debounce(() => {
    refetch({ page: page.value, name: search.value });
}, 500);
watch([page, search], () => {
    debouncedSearch();
});
function changePage(newPage) {
    page.value = newPage;
}
const characters = computed(() => result.value?.characters?.results ?? []);
const pages = computed(() => result.value?.characters?.info?.pages ?? 1);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.QPage;
/** @type {[typeof __VLS_components.QPage, typeof __VLS_components.qPage, typeof __VLS_components.QPage, typeof __VLS_components.qPage, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    padding: true,
}));
const __VLS_2 = __VLS_1({
    padding: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
if (__VLS_ctx.loading) {
    const __VLS_5 = {}.QSpinner;
    /** @type {[typeof __VLS_components.QSpinner, typeof __VLS_components.qSpinner, ]} */ ;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
        ...{ class: "fixed-center" },
        color: "primary",
        size: "5em",
    }));
    const __VLS_7 = __VLS_6({
        ...{ class: "fixed-center" },
        color: "primary",
        size: "5em",
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_9 = {}.QInput;
    /** @type {[typeof __VLS_components.QInput, typeof __VLS_components.qInput, ]} */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
        ...{ 'onChange': {} },
        modelValue: (__VLS_ctx.search),
        label: "Buscar personagem",
        ...{ class: "q-mb-md" },
    }));
    const __VLS_11 = __VLS_10({
        ...{ 'onChange': {} },
        modelValue: (__VLS_ctx.search),
        label: "Buscar personagem",
        ...{ class: "q-mb-md" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    let __VLS_13;
    let __VLS_14;
    let __VLS_15;
    const __VLS_16 = {
        onChange: (__VLS_ctx.)
    };
    var __VLS_12;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "row q-col-gutter-md" },
    });
    for (const [char] of __VLS_getVForSourceType((__VLS_ctx.characters))) {
        /** @type {[typeof CharacterCard, ]} */ ;
        // @ts-ignore
        const __VLS_17 = __VLS_asFunctionalComponent(CharacterCard, new CharacterCard({
            key: (char.id),
            character: (char),
            ...{ class: "col-xs-12 col-sm-6 col-md-4 col-lg-3" },
        }));
        const __VLS_18 = __VLS_17({
            key: (char.id),
            character: (char),
            ...{ class: "col-xs-12 col-sm-6 col-md-4 col-lg-3" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    }
    /** @type {[typeof Pagination, ]} */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(Pagination, new Pagination({
        ...{ 'onPageChanged': {} },
        currentPage: (__VLS_ctx.page),
        maxPages: (__VLS_ctx.pages),
    }));
    const __VLS_21 = __VLS_20({
        ...{ 'onPageChanged': {} },
        currentPage: (__VLS_ctx.page),
        maxPages: (__VLS_ctx.pages),
    }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    let __VLS_23;
    let __VLS_24;
    let __VLS_25;
    const __VLS_26 = {
        onPageChanged: (__VLS_ctx.changePage)
    };
    var __VLS_22;
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['fixed-center']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mb-md']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['q-col-gutter-md']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xs-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-3']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            CharacterCard: CharacterCard,
            Pagination: Pagination,
            page: page,
            search: search,
            loading: loading,
            changePage: changePage,
            characters: characters,
            pages: pages,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
