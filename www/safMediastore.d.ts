export {};

interface CordovaPlugins{
	safMediastore:{
		selectFolder(uri?:string):Promise<string>,
		selectFile(uri?:string):Promise<string>,
		openFolder(uri:string):Promise<void>,
		openFile(uri:string):Promise<void>,
		readFile(uri:string):Promise<ArrayBuffer>,
		writeFile(params:{
			data:ArrayBuffer,
			filename:string,
			folder?:string,
			subfolder?:string
		}):Promise<string>,
		saveFile(params:{
			data:ArrayBuffer,
			filename?:string,
			folder?:string
		}):Promise<string>
	};
}