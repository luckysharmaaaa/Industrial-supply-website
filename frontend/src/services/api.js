const API_BASE = `${import.meta.env.VITE_API_URL}/api`;
async function request(endpoint, options = {}) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const message =
      data.message ||
      data.errors?.[0]?.message ||
      'Something went wrong. Please try again.';

    throw new Error(message);
  }

  return data;
}

export const submitContact = (formData) =>
  request('/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });

export const getProducts = () => request('/products');

export const getProductBySlug = (slug) =>
  request(`/products/${slug}`);

export const getRelatedProducts = (slug, limit = 3) =>
  request(`/products/${slug}/related?limit=${limit}`);

export const getBlogPosts = () => request('/blog');

export const getBlogPostBySlug = (slug) =>
  request(`/blog/${slug}`);

export const checkHealth = () => request('/health');