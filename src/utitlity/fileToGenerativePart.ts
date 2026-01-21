const fileToGenerativePart = async (file: any) => {
    const base64Promise = new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader?.result?.split(',')[1]);
        reader.readAsDataURL(file);
    });
    return {
        inlineData: { data: await base64Promise, mimeType: file.type },
    };
};

export default fileToGenerativePart;