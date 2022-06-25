using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StvolScript : MonoBehaviour
{
    public GameObject core;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            Vector3 forwardofstvol = transform.position + transform.TransformDirection(Vector3.forward * 0f);
            GameObject newcore = Instantiate(core, forwardofstvol, transform.rotation);
            gameObject.GetComponent<AudioSource>().PlayOneShot(gameObject.GetComponent<AudioSource>().clip);
        }
    }
}
