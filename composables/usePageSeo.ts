export const usePageSeo = (title: string, description: string, keywords = '全球品牌联营,制造企业出海,跨境电商合作,品牌孵化,中国制造全球化,供应链合作') => {
  useSeoMeta({
    title: `${title}｜行星跨境`,
    description,
    keywords,
    ogTitle: `${title}｜行星跨境`,
    ogDescription: description,
    ogType: 'website',
    ogImage: '/og.png',
    twitterCard: 'summary_large_image',
    twitterTitle: `${title}｜行星跨境`,
    twitterDescription: description,
    twitterImage: '/og.png'
  })
}
