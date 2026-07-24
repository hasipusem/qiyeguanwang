<script setup lang="ts">
const store = useApplicationStore()
const form = reactive({company:'',name:'',phone:'',product:'',scale:'',need:''})
function submit(){ store.markSubmitted() }
</script>
<template>
  <div v-if="store.submitted" class="rounded-2xl bg-emerald-50 p-10 text-center"><div class="text-3xl">✓</div><h3 class="mt-3 text-xl font-semibold text-[#0B1F33]">申请已提交</h3><p class="mt-2 text-sm text-slate-500">我们的合作顾问将在 1–2 个工作日内与您联系。</p></div>
  <form v-else class="grid gap-4 md:grid-cols-2" @submit.prevent="submit">
    <label class="field"><span>企业名称</span><input v-model="form.company" required placeholder="请输入企业全称"></label>
    <label class="field"><span>联系人</span><input v-model="form.name" required placeholder="请输入姓名"></label>
    <label class="field"><span>联系电话</span><input v-model="form.phone" required type="tel" placeholder="请输入手机号码"></label>
    <label class="field"><span>主营产品</span><input v-model="form.product" required placeholder="如：LED 浴室镜"></label>
    <label class="field md:col-span-2"><span>年销售规模</span><select v-model="form.scale" required><option value="" disabled>请选择</option><option>5000万元以下</option><option>5000万–1亿元</option><option>1亿–5亿元</option><option>5亿元以上</option></select></label>
    <label class="field md:col-span-2"><span>合作需求</span><textarea v-model="form.need" rows="4" placeholder="请简要介绍您的企业优势与合作期待"></textarea></label>
    <div class="md:col-span-2"><button class="btn-primary w-full md:w-auto" type="submit">提交合作申请 →</button><p class="mt-3 text-xs text-slate-400">提交即表示您同意我们仅将信息用于合作沟通。</p></div>
  </form>
</template>
<style scoped>
.field{display:flex;flex-direction:column;gap:9px;font-size:12px;color:#64748b}.field input,.field select,.field textarea{width:100%;border:1px solid #dde3e8;border-radius:12px;background:#fff;padding:14px 15px;font-size:14px;color:#0b1f33;outline:none;transition:.2s}.field input:focus,.field select:focus,.field textarea:focus{border-color:#c9a86a;box-shadow:0 0 0 3px rgba(201,168,106,.12)}
</style>
