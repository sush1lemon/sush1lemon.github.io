const previewImage = ref('')
export function useModalImage() {
    const setPreviewImage = function (link: string) {
        previewImage.value = link;
    }

    return {
        previewImage,
        setPreviewImage
    }
}