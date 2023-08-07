import $fetch from "isomorphic-unfetch";

const api_url = "localhost:8081";

const addLead = async (formData, smsCode) => {
  try {
    const res = await $fetch(`${api_url}/crm/lead/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        phone: formData.phone,
        code: smsCode,
      }),
    });
    const data = await res.json();
    return { ok: res.ok && data.success, data };
  } catch (e) {
    return { ok: false };
  }
};
const sendSmsLead = async (phone) => {
  try {
    const res = await $fetch(`${api_url}/sms/`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        accept: "application/json",
      }),

      body: JSON.stringify({
        phone: phone,
      }),
    });
    const data = await res.json();
    return { ok: res.ok && data.success, data };
  } catch (e) {
    return { ok: false };
  }
};

export const AmoCrmApi = {
  addLead,
  sendSmsLead,
};
