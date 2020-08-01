export const adaptedUser = (user) => ({
  id: user.id,
  avatar: user.avatar_url,
  email: user.email,
  name: user.name
});
