export const getFromLocal = () => {
    try {
        const data = localStorage.getItem("token");
        return data || false; // Return `data` directly if available, otherwise `false`
    } catch (error) {
        console.error("Error in getFromLocal:", error);
        return false;
    }
}
export const setToLocal = (data) => {
    try {
        localStorage.setItem("token", data);
        return true;
    } catch (error) {
        console.error("error in setToLocal:", error);
        return false;
    }
}
export const RemoveFromLocal = () => {
    try {
        localStorage.removeItem("token");
    } catch (error) {
        console.error("error in RemoveFromLocal:", error);
    }
}