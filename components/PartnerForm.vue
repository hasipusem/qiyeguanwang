<script setup lang="ts">
const store = useApplicationStore()
const form = reactive({
  company: '',
  name: '',
  phone: '',
  product: '',
  scale: '',
  need: '',
  botField: ''
})
const submitting = ref(false)
const submitError = ref('')

async function submit() {
  submitting.value = true
  submitError.value = ''

  try {
    const body = new URLSearchParams({
      'form-name': 'partner-application',
      company: form.company,
      name: form.name,
      phone: form.phone,
      product: form.product,
      scale: form.scale,
      need: form.need,
      'bot-field': form.botField
    })

    await $fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString()
    })

    store.markSubmitted()
  } catch {
    submitError.value = '提交暂时未成功，请稍后重试或发送邮件至 hasipusem@gmail.com。'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div
    v-if="store.submitted"
    class="rounded-2xl bg-emerald-50 p-10 text-center"
    role="status"
  >
    <div class="text-3xl">✓</div>
    <h3 class="mt-3 text-xl font-semibold text-[#0B1F33]">申请已提交</h3>
    <p class="mt-2 text-sm text-slate-500">
      留言已发送至合作团队，我们将在 1–2 个工作日内与您联系。
    </p>
  </div>

  <form
    v-else
    name="partner-application"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    class="grid gap-4 md:grid-cols-2"
    @submit.prevent="submit"
  >
    <input type="hidden" name="form-name" value="partner-application">
    <p class="hidden" aria-hidden="true">
      <label>请勿填写：<input v-model="form.botField" name="bot-field"></label>
    </p>

    <label class="field">
      <span>企业名称</span>
      <input v-model="form.company" name="company" required placeholder="请输入企业全称">
    </label>
    <label class="field">
      <span>联系人</span>
      <input v-model="form.name" name="name" required placeholder="请输入姓名">
    </label>
    <label class="field">
      <span>联系电话</span>
      <input v-model="form.phone" name="phone" required type="tel" placeholder="请输入手机号码">
    </label>
    <label class="field">
      <span>主营产品</span>
      <input v-model="form.product" name="product" required placeholder="如：LED 浴室镜">
    </label>
    <label class="field md:col-span-2">
      <span>年销售规模</span>
      <select v-model="form.scale" name="scale" required>
        <option value="" disabled>请选择</option>
        <option>5000万元以下</option>
        <option>5000万–1亿元</option>
        <option>1亿–5亿元</option>
        <option>5亿元以上</option>
      </select>
    </label>
    <label class="field md:col-span-2">
      <span>合作需求</span>
      <textarea
        v-model="form.need"
        name="need"
        rows="4"
        placeholder="请简要介绍您的企业优势与合作期待"
      />
    </label>

    <div class="md:col-span-2">
      <button class="btn-primary w-full md:w-auto disabled:cursor-wait disabled:opacity-60" type="submit" :disabled="submitting">
        {{ submitting ? '正在提交…' : '提交合作申请 →' }}
      </button>
      <p v-if="submitError" class="mt-3 text-sm text-red-600" role="alert">{{ submitError }}</p>
      <p class="mt-3 text-xs text-slate-400">
        提交即表示您同意我们仅将信息用于合作沟通。
      </p>
    </div>
  </form>
</template>

<style scoped>
.field{display:flex;flex-direction:column;gap:9px;font-size:12px;color:#64748b}.field input,.field select,.field textarea{width:100%;border:1px solid #dde3e8;border-radius:12px;background:#fff;padding:14px 15px;font-size:14px;color:#0b1f33;outline:none;transition:.2s}.field input:focus,.field select:focus,.field textarea:focus{border-color:#c9a86a;box-shadow:0 0 0 3px rgba(201,168,106,.12)}
</style>
