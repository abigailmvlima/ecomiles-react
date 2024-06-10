import Post from "./postModel";

export async function createPost(postData) {
  try {
    const newPost = new Post(postData);
    return await newPost.save();
  } catch (error) {
    throw error;
  }
}

export async function getAllPosts() {
  try {
    return await Post.find({});
  } catch (error) {
    throw error;
  }
}

export async function getPostById(postId) {
  try {
    const post = await Post.findById(postId);
    if (!post) {
      throw new Error("Post não encontrado");
    }
    return post;
  } catch (error) {
    throw error;
  }
}

export async function updatePost(postId, updateData) {
  try {
    const post = await Post.findByIdAndUpdate(postId, updateData, {
      new: true,
    });
    if (!post) {
      throw new Error("Post não encontrado para atualizar");
    }
    return post;
  } catch (error) {
    throw error;
  }
}

export async function deletePost(postId) {
  try {
    const post = await Post.findByIdAndDelete(postId);
    if (!post) {
      throw new Error("Post não encontrado para deletar");
    }
    return post;
  } catch (error) {
    throw error;
  }
}

